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

            var fileLocation = string.Format("{0}\\..\\assets\\{1}", Directory.GetCurrentDirectory(), filePath);

            //Create COM Objects. Create a COM object for everything that is referenced
            Excel.Application xlApp = new Excel.Application();
            Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(fileLocation);
            Excel._Worksheet xlWorksheet = (Excel._Worksheet)xlWorkbook.Sheets[1];
            Excel.Range xlRange = xlWorksheet.UsedRange;

            int rowCount = xlRange.Rows.Count;
            int colCount = xlRange.Columns.Count;

            List<Meme> MemeList = new List<Meme>();

            for (int row = 1; row <= rowCount; row++) {
                if(row <= 2)
                    { continue; }
                Meme meme = new Meme() { }; 
                for (int collumn = 1; collumn <= colCount; collumn++)
                {
                    if (collumn == 2) {
                        meme.Url = GetValue(row, collumn).Remove(cutPoint);
                    }
                    if (collumn == 4) {
                        meme.Name = GetValue(row, collumn);
                    }
                }
            }

            string GetValue(int row, int collumn)
                {
                    return (string)(xlRange.Cells[1, 1] as Excel.Range).Value;
            }

            //cleanup
            GC.Collect();
            GC.WaitForPendingFinalizers();

            //rule of thumb for releasing com objects:
            //  never use two dots, all COM objects must be referenced and released individually
            //  ex: [somthing].[something].[something] is bad

            //release com objects to fully kill excel process from running in the background
            Marshal.ReleaseComObject(xlRange);
            Marshal.ReleaseComObject(xlWorksheet);

            //close and release
            xlWorkbook.Close();
            Marshal.ReleaseComObject(xlWorkbook);

            //quit and release
            xlApp.Quit();
            Marshal.ReleaseComObject(xlApp);

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