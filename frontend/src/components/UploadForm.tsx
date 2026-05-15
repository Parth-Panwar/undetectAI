import { useState } from "react";
import API from "../api";

interface Props {
  onResult: (data: any) => void;
}

const UploadForm = ({ onResult }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<"image" | "video">("image");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const endpoint =
      mode === "image" ? "/detect-image" : "/detect-video";

    try {
      setLoading(true);

      const response = await API.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="mode-selector">
        <button
          className={mode === "image" ? "active" : ""}
          onClick={() => setMode("image")}
        >
          Image Detection
        </button>

        <button
          className={mode === "video" ? "active" : ""}
          onClick={() => setMode("video")}
        >
          Video Detection
        </button>
      </div>

      <div className="file-input-wrapper">
        <p>
          Drag & drop or choose a{" "}
          {mode === "image" ? "image" : "video"}
        </p>

        <input
          type="file"
          accept={mode === "image" ? "image/*" : "video/*"}
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>

      <button
        className="upload-btn"
        onClick={handleUpload}
        disabled={!file || loading}
      >
        {loading ? "Processing..." : "Upload & Detect"}
      </button>
    </div>
  );
};

export default UploadForm;