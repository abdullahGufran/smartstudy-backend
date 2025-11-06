import express from 'express';
import cors from 'cors';
import  ConnectDB from './config/db.js';
import classRoutes from './routes/classRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import chapterRoutes from './routes/chapterRoutes.js';
import notesRoutes from './routes/notesRoutes.js';

ConnectDB();

const app=express();
app.use(cors());

const PORT=5000;

app.get('/',(req,res)=>{
    res.send('API is running....');
});



app.use("/api/classes", classRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/notes",notesRoutes);




app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
