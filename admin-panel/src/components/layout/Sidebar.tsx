import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
<aside className="w-64 bg-slate-900 text-white p-6 min-h-screen">
    <h2 className="text-xl font-bold mb-6">CMS Core</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/">Dashboard</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </aside>
  )
}