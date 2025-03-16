using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace StudentReactWebApIDemo.Migrations
{
    /// <inheritdoc />
    public partial class addedroles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2401d1da-53f3-4a3e-b757-58d4deb66f8b", "3", "HR", "HR" },
                    { "36c8b718-21a2-4194-9298-e89952c2615d", "2", "User", "User" },
                    { "56beae50-b7be-4f0e-a487-0290ddf11e0f", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2401d1da-53f3-4a3e-b757-58d4deb66f8b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "36c8b718-21a2-4194-9298-e89952c2615d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56beae50-b7be-4f0e-a487-0290ddf11e0f");
        }
    }
}
