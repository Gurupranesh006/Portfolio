const fs = require("fs");

const patchError = (error) => {
  if (error && error.code === "EISDIR") {
    const nextError = new Error(error.message);
    nextError.code = "EINVAL";
    return nextError;
  }
  return error;
};

const originalReadlink = fs.readlink;
const originalReadlinkSync = fs.readlinkSync;
const originalReadlinkPromise = fs.promises.readlink;

fs.readlink = function patchedReadlink(path, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }

  return originalReadlink.call(fs, path, options, (error, linkString) => {
    callback(patchError(error), linkString);
  });
};

fs.readlinkSync = function patchedReadlinkSync(path, options) {
  try {
    return originalReadlinkSync.call(fs, path, options);
  } catch (error) {
    throw patchError(error);
  }
};

fs.promises.readlink = async function patchedReadlinkPromise(path, options) {
  try {
    return await originalReadlinkPromise.call(fs.promises, path, options);
  } catch (error) {
    throw patchError(error);
  }
};