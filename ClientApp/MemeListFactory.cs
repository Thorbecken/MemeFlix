using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemeFlix.ClientApp
{
    public static class MemeListFactory
    {
        private MemeListFactory() { }
        private class FilePath
        {
            public string Name { get; set; }
            public string FileName { get; set; }
            public string WorkSheet { get; set; }
        }
        private List<FilePath> currentListOfFiles = new List<FilePath>
        {
            new FilePath(){
                this.Name = "MemeReview",
                this.FileName = "MemeReviewPlayList.xls",
                this.WorkSheet = "Blad1"
            }
        };


        /// <summary>
        /// Returns a Enumarable from an excel in the assets folder
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public Enumerable GetMemeList(string fileName)
        {
            FilePath filePath = GetFilePath(fileName);
            if (filePath == null)
            { return null; }

            var fileName = string.Format("{0}\\..\\assets\\{1}", Directory.GetCurrentDirectory(), filePath.FileName);
            var connectionString = string.Format("Provider=Microsoft.Jet.OLEDB.4.0; data source={0}; Extended Properties=Excel 8.0;", fileName);

            var adapter = new OleDbDataAdapter("SELECT * FROM [{0}$]", filePath.WorkSheet, connectionString);
            var ds = new DataSet();

            adapter.Fill(ds, filePath.WorkSheet);

            var data = ds.Tables[filePath.WorkSheet].AsEnumerable();
            return data;

            /*
             * Sample search query
             *var query = data.Where(x => x.Field<string>("phoneNumber") != string.Empty).Select(x =>
                new MyContact
                    {
                        firstName= x.Field<string>("First Name"),
                        lastName = x.Field<string>("Last Name"),
                        phoneNumber =x.Field<string>("Phone Number"),
                    }); 
             */
        }

        private string GetFilePath(string fileName)
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
