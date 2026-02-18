import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// reg api :called by auth component when register btn clicked
export const registerAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/user/register`,userDetails)
}

// login api :called by auth component when login btn clicked
export const loginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/user/login`,userDetails)
}

export const googleLoginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)

}

// create folder : called by userdashboard component when create button clicked
export const createFolderAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/create-folder`,reqBody)
}

// get all folders, loged-user
export const getAllFoldersAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/user/allfolders`,{})
}

// get files from specific folder
// get all folders, loged-user
export const getfilesAPI = async(folderId)=>{
    return await commonAPI("GET",`${serverURL}/user/folder/${folderId}`,{})
}

// get all files from all folders
export const getHistoryfilesAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/user/history`,{})
}

// upload file
export const uploadFileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/cloudinary/upload-file`,reqBody,reqHeader)
}

// View&download file
export const viewFileAPI = async (fileId) =>{
   return await commonAPI("GET", `${serverURL}/user/file/view/${fileId}`,{},{},"blob");
}

// share file
export const shareFileAPI = async (fileId) =>{
return await  commonAPI("POST",`${serverURL}/sharing/${fileId}`,{});
}

// access file
export const accessFileAPI = async (fileId) =>{
return await  commonAPI("GET",`${serverURL}/share/${fileId}`,{ responseType: "blob" });
}

// delete file
export const deleteFileAPI = async (fileId) =>{
return await  commonAPI("DELETE",`${serverURL}/delete/${fileId}`,{});
}

// user submit complaints
export const submitComplaintAPI = async (message,headers) =>{
return await  commonAPI("POST",`${serverURL}/submit-complaint`,{message},headers);
}

// fetch Complaint by user
export const fetchComplaintsAPI = async (headers) =>{
return await  commonAPI("GET",`${serverURL}/user/complaintList`,{},headers);
}

// admin - get all users
export const getAllAdminUsersAPI = async (reqHeader) =>{
return await  commonAPI("GET",`${serverURL}/admin/all-users`,reqHeader);
}

// admin - get all complaints
export const getAllComplaintsAPI = async (reqHeader) =>{
return await  commonAPI("GET",`${serverURL}/admin/view-complaints`,reqHeader);
}

// admin : send replay to complaints
export const replyToComplaintAPI = async (complaintId, replyMessage, headers) =>{
return await  commonAPI("PATCH",`${serverURL}/reply/${complaintId}`,{replyMessage},headers);
}

// user : open Notification
export const getUserNotificationsAPI = async () =>{
return await  commonAPI("GET",`${serverURL}/user/notifications`,{});
}

// trash
export const getTrashFilesAPI = async () =>{
return await  commonAPI("GET",`${serverURL}/user/trash`,{});
}

//restore
export const restoreFileAPI = async (fileId) =>{
return await  commonAPI("PUT",`${serverURL}/user/restore/${fileId}`,{});
} 

// get User profile :user

export const getUserProfileAPI = async (token) =>{
return await  commonAPI("GET",`${serverURL}/user-profile`,{},token);
} 

// update password
export const updatePasswordAPI = async (reqBody,reqHeader) =>{
return await  commonAPI("PUT",`${serverURL}/user/update-password`,reqBody,reqHeader);
} 

// storage info - user 
export const userTotalStorageAPI = async (token) =>{
return await  commonAPI("GET",`${serverURL}/user-storageinfo`,{},token);
} 

// storage info - Admin 
export const adminStorageInfoAPI = async () =>{
return await  commonAPI("GET",`${serverURL}/admin-storageinfo`,{});
} 

// getUsersStorageForAdminAPI each user total storage - admin
export const getUsersStorageForAdminAPI = async (token) =>{
return await  commonAPI("GET",`${serverURL}/admin-userstorage`,{},token);
} 