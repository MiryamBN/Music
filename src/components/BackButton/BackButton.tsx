import { Link } from "react-router-dom";

export default function BackButton() {
    return (
      <>
      <main style={{ padding: "1rem 0" }}>
            <h2>BackButton</h2>
        </main>
        <Link to="/myAddSong"></Link>
    </>
    )
}