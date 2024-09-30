import mongoose from "mongoose";

export const connectDB = async () => {
  (
    await mongoose.connect(
      "mongodb+srv://mallisettymahesh37:mahesh37@cluster0.cutjp.mongodb.net/food-del"
    ).then(() => console.log("DB Connected"))
  );
};
