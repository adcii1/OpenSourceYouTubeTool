import { useState } from "react";
import { Button, Card, CardContent, Input, Label } from "@/components/ui";

export default function Dashboard() {
  const [status, setStatus] = useState("Idle");
  const [title, setTitle] = useState("");

  const triggerAutomation = async (endpoint) => {
    setStatus("Processing...");
    const response = await fetch(`http://localhost:8000/${endpoint}`, { method: "POST" });
    const data = await response.json();
    setStatus(data.status);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">YouTube Automation Dashboard</h1>
      
      <Card>
        <CardContent className="space-y-4">
          <Label>Video Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter video title" />
          
          <div className="flex space-x-2">
            <Button onClick={() => triggerAutomation("generate-script")}>Generate Script</Button>
            <Button onClick={() => triggerAutomation("generate-voiceover")}>Generate Voiceover</Button>
            <Button onClick={() => triggerAutomation("generate-video")}>Generate Video</Button>
            <Button onClick={() => triggerAutomation("upload-youtube")}>Upload to YouTube</Button>
          </div>
        </CardContent>
      </Card>
      
      <p className="text-lg font-medium">Status: {status}</p>
    </div>
  );
}
