import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function Room() {
  const { roomId } = useParams<RoomParams>();

  if (!roomId) {
    return <Navigate to="/" replace />;
  }

  return <div>room details for room {roomId}</div>;
}
