import "dotenv/config";
import app from "./app";

const start = async (): Promise<void> => {
  try {
    app.listen(5000, () => {
      console.log("Server started on port 5000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
