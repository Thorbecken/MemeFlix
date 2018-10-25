using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Data.OleDb;
using Excel = Microsoft.Office.Interop.Excel;
using System.Runtime.InteropServices;
using MemeFlix.Models;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;

namespace MemeFlix.Factories
{
    public static class MemeListFactory
    {
        private class FilePath
        {
           public string Name { get; set; }
           public string FileName { get; set; }
           public string WorkSheet { get; set; }

            public FilePath() { }
            public FilePath(string name, string fileName, string workSheet)
            {
                Name = name;
                FileName = fileName;
                WorkSheet = workSheet;
            }

        }

        private static List<FilePath> currentListOfFiles = new List<FilePath>
        {
            new FilePath() {
                 Name = "MemeReview",
                FileName = "MemeReviewPlayList.xls",
                WorkSheet = "Blad1"
            }
        };

        /// <summary>
        /// Returns a Enumarable from an excel in the assets folder
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static List<Meme> GetExcelFile(string playList)
        {
            int cutPoint = "https://www.youtube.com/watch?v=".Length;
            string filePath = GetFilePath(playList);
            if (filePath == null)
            { return null; }

            var fileLocation = string.Format("{0}\\..\\MemeFlix\\assets\\{1}", Directory.GetCurrentDirectory(), filePath);

            IWorkbook workbook;
            using (FileStream stream = new FileStream(fileLocation, FileMode.Open, FileAccess.Read))
            {
                workbook = new HSSFWorkbook(stream);
            }

            ISheet sheet = workbook.GetSheetAt(0); // zero-based index of your target sheet
            DataTable dt = new DataTable(sheet.SheetName);

            // write header row
            IRow headerRow = sheet.GetRow(0);
            foreach (ICell headerCell in headerRow)
            {
                dt.Columns.Add(headerCell.ToString());
            }

            // write the rest
            int rowIndex = 0;
            foreach (IRow row in sheet)
            {
                // skip header row
                if (rowIndex++ == 0) continue;
                DataRow dataRow = dt.NewRow();
                dataRow.ItemArray = row.Cells.Select(c => c.ToString()).ToArray();
                dt.Rows.Add(dataRow);
            }
            
            int rowCount = dt.Rows.Count;
            int colCount = dt.Columns.Count;

            List<Meme> MemeList = new List<Meme>();

            for (int row = 1; row < rowCount; row++) {
                if(row == 0)
                    { continue; }
                Meme meme = new Meme() { }; 
                for (int collumn = 1; collumn < colCount; collumn++)
                {
                    if (collumn == 1) {
                        string value = GetValue(row, collumn);
                        if (value.Length > cutPoint) { 
                        meme.Url =  GetValue(row, collumn).Remove(0, cutPoint);
                    }
                        else {
                            meme.Url =  "";
                        }
                    }
                    if (collumn == 3) {
                        meme.Name = GetValue(row, collumn);
                    }
                }
                MemeList.Add(meme);
            }

            string GetValue(int row, int collumn)
            {
                var value =  (string)dt.Rows[row][collumn];
                return value;
            }

            return MemeList;
        }

        private static string GetFilePath(string fileName)
        {
            foreach (FilePath file in currentListOfFiles)
            {
                if (file.Name == fileName)
                { return file.FileName; }
            }
            return null;
        }
    }
}