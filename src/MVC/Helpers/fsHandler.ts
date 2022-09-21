import { existsSync, mkdirSync } from "fs";

/** Check if the folder not found create it..
 */
export const isFolderFound = async (folderPath: string) => {
  const isFound: boolean = existsSync(folderPath);
  // console.log("isFound: ", isFound);
  if (!isFound) mkdirSync(folderPath);
};
