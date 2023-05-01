module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: "auto",
  bracketSpacing: true,
  overrides: [
    {
      files: ["*.ts"],
      options: {
        parser: "typescript",
      },
    },
    {
      files: ["*.json"],
      options: {
        parser: "json",
      },
    },
  ],
};
