import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"

export default function Admin() {
  return (
	<div>
    <div className="absolute left-0 bg-slate-500 h-screen"> Hello </div>
  </div>
  )
}

Admin.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

