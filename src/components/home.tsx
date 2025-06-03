import { Users, Calculator, Lightbulb, UserCheck, Globe } from "lucide-react"
//icon
//family
import family from "@/public/family.svg"
//people
import people from "@/public/people.svg"
export function Home() {
  const services = [
    {
      title: "พัฒนา-ทำเว็บไซต์",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "พัฒนาแอปพลิเคชัน",
      icon: <Calculator className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "นวัตกรรมประเทศ",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "ให้คำปรึกษาด้านเทคโนโลยี พัฒนาระบบ",
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "ที่ปรึกษาทางด้าน ไอซีที",
      icon: <UserCheck className="w-8 h-8 text-gray-300" />,
    },
  ]

    return (
        // bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800
    <div id="home" className="min-h-screen text-white ">
      <div className="container px-6 py-16 mx-auto lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">ภาษบริการของเรา</h1>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                ของเราที่ให้บริการด้าน ICT ครบวงจร และ ด้านโลจิสติก , เพื่อให้ใหม่ , เพื่อพัฒนาระบบ , เพื่อพัฒนาระบบขั้นสูงต่อไป ,
                ดูแลระบบและบำรุงรักษาระบบ
              </p>
              <p>ได้ลิขสิทธิ์ระบบพัฒนาต่าง ๆ เพื่อให้ได้ผลิตภัณฑ์ใหม่ ใส่ใจ ให้บริการลูกค้าดีที่สุดยาว-นาน.</p>
            </div>
          </div>

          {/* Right side - Services grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="p-3 rounded-lg bg-slate-700/50">{service.icon}</div>
                  <h3 className="text-sm font-medium leading-relaxed text-gray-200">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute w-32 h-32 rounded-full top-1/4 right-1/4 bg-blue-500/10 blur-xl"></div>
      <div className="absolute w-48 h-48 rounded-full bottom-1/4 left-1/4 bg-purple-500/10 blur-xl"></div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <button className="p-3 transition-all duration-300 border rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
