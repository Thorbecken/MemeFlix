using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MemeFlix.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MemeLists",
                columns: table => new
                {
                    MemeListId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MemeLists", x => x.MemeListId);
                });

            migrationBuilder.CreateTable(
                name: "Memes",
                columns: table => new
                {
                    MemeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    MemeListId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Memes", x => x.MemeId);
                    table.ForeignKey(
                        name: "FK_Memes_MemeLists_MemeListId",
                        column: x => x.MemeListId,
                        principalTable: "MemeLists",
                        principalColumn: "MemeListId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Memes_MemeListId",
                table: "Memes",
                column: "MemeListId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Memes");

            migrationBuilder.DropTable(
                name: "MemeLists");
        }
    }
}
