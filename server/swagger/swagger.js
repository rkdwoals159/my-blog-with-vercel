import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "개발이 취미인 남자",
      description:
        "프로젝트 설명 Node.js Swaager swagger-jsdoc 방식 RestFul API 클라이언트 UI",
    },
    servers: [
      {
        url: "http://localhost:8080", // 요청 URL
      },
    ],
  },
  apis: ["./routes/*.js", "./routes/user/*.js",'./routes/posting/*.js'], //Swagger 파일 연동
};
const specs = swaggerJSDoc(options);

export { swaggerUi, specs };
