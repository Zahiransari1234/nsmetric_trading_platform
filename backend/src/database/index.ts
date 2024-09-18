export const connectDB = async () => {
  try {
    //await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`) //database connection using mongoose
    console.log("Database Connected");
  } catch (error) {
    console.log(`My Database Error ${error}`);
  }
};
