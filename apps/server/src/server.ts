import "dotenv/config";
import app from "./app";

const PORT = process.env.SERVER_PORT || 5000;

const start = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
