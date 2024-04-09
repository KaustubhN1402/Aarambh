const Collage = require("../models/collageModels");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");


const getCollages = asyncHandler(async (req, res, next) => {
  const collages = await Collage.find(); // Retrieve all colleges without filtering

    if (collages.length === 0) {
      console.log("No college found")
    return res.status(404).json({
      success: false,
      message: "No colleges found",
    });
  }

  res.json({
    success: true,
    collages,
  });
    console.log("Colleges Send")
    console.log(collages)
});

// Get all collages data
const getCollageData = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  try {
    const collage = await Collage.findById(id);
    if (!collage) {
      return res.status(404).json({
        success: false,
        message: "Collage not found with the provided id",
      });
    }
    res.json({
      success: true,
      collage,
    });
    console.log(collage);
    console.log("College Send");
  } catch (error) {
    // Handle any potential errors
    console.error("Error fetching collage data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching collage data",
    });
  }
});

//Get a Particular collage data

const getCollageByCode = asyncHandler(async (req, res, next) => {
  const collageCode = req.query.code; // Adjusted to use the correct query parameter name
  const collages = await Collage.find({
    "basicInfo.CollageCode": { $regex: new RegExp(collageCode, "i") },
  }); // Assuming CollageCode is the field in the Collage model

  if (!collages || collages.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No colleges found with the provided code",
    });
  }

  res.json({
    success: true,
    collages,
  });
});

const getCollageByName = asyncHandler(async (req, res, next) => {
  const collageName = req.query.name;
  console.log("Query", collageName);
  const collages = await Collage.find({
    "basicInfo.institution": { $regex: new RegExp(collageName, "i") },
  });

  if (collages.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No collages found matching the search criteria",
    });
  }

  console.log(collages);

  res.json({
    collages,
  });
});

// Add a Collage

const addnewCollageData = asyncHandler(async (req, res, next) => {
  // Check if collage already exist
  const collageId = req.params.CollageCode;
  const collage = await Collage.findOne(collageId);
  if (collage) {
    return res.status(404).json({
      success: false,
      message: "Collage already exist",
    });
  }

  const {
    CollageName,
    CollageCode,
    establishment,
    affiliatingUniversity,
    accreditation,
    principal,
    branchWiseStudentIntake,
    Facilities,
    Cutoff,
    Placements,
  } = req.body;

  if (
    !CollageName ||
    !CollageCode ||
    !establishment ||
    !affiliatingUniversity
  ) {
    return next(new ErrorHandler("All fields are manditory", 400));
  }

  try {
    const newCollage = new Collage({
      CollageName,
      CollageCode,
      establishment,
      affiliatingUniversity,
      accreditation,
      principal,
      branchWiseStudentIntake,
      Facilities,
      Cutoff,
      Placements,
    });

    await newCollage.save();

    res.status(201).json({
      success: true,
      message: "Collage data added successfully",
      collage: newCollage,
    });
  } catch (error) {
    next(error); // Pass error to Express error handler middleware
  }
});

// DELETE a collage Data

// const deleteCollageData=asyncHandler(async(req,res,next)=>{

//     try{

//         const collageId=req.params.CollageCode;
//         const deleteCollage=await Collage.findOneAndDelete(collageId);

//         if(!deleteCollage){
//             return next(new ErrorHandler("College not found", 404));
//         }

//         res.status(200).json({message:"Collage deleted successfully",deleteCollage});
//     }catch(error){
//         next(error);

//     }
// });

//UPDATE collage data

// const updateCollageData=asyncHandler(async(req,res,next)=>{

//     const collageId=req.params.CollageCode;

//     const {
//         CollageName,
//         CollageCode,
//         establishment,
//         affiliatingUniversity,
//         accreditation,
//         principal,
//         branchWiseStudentIntake,
//         Facilities,
//         Cutoff,
//         Placements
//     } = req.body;

//     const UpdatedCollageData={
//         CollageName,
//         CollageCode,
//         establishment,
//         affiliatingUniversity,
//         accreditation,
//         principal,
//         branchWiseStudentIntake,
//         Facilities,
//         Cutoff,
//         Placements

//     }

//     Collage.findOneAndUpdate(collageId, UpdatedCollageData, { new: true })
//         .then(UpdatedCollageData => {
//             if (!UpdatedCollageData) {
//                 return res.status(404).json({ message: "College not found" });
//             }
//             res.status(200).json({ message: "College updated successfully", UpdatedCollageData});
//         })
//         .catch(error => {
//             console.error("Error updating college:", error);
//             res.status(500).json({ message: "Internal server error" });
//         });
// })

// ####### This code is for Adding collages to database manually through js object

// const addCollageData = async () => {
//   try {
//     const docs = await Collage.insertMany(collage);
//     return Promise.resolve(docs);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// addCollageData()
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));

module.exports = {
 
  getCollageByCode,
  getCollageByName,
  getCollageData,
  getCollages,
  
};
// getCollageData,getCollageByCode,addCollageData,deleteCollageData,updateCollageData,
