module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["**/?(*.)+(test).ts"], // Ajuste o caminho dos testes conforme sua estrutura de pastas
  collectCoverage: true, // Gera relatório de cobertura de código
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
