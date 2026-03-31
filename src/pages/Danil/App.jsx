import { motion } from "framer-motion";
import DataImage from "./data.js";

const App = () => {
  // Animasi Scroll Reveal yang elegan (Physics-based)
  const scrollReveal = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring",
        stiffness: 35,   
        damping: 25,     
        duration: 1.5    
      } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    
    <div className="bg-black text-white selection:bg-blue-500/20 font-poppins overflow-x-hidden scroll-smooth">
      
      <main className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* --- HERO SECTION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"> 
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center"
            >
              {/* Header Badge */}
              <motion.div 
  variants={scrollReveal} 
  style={{ maxWidth: 'fit-content' }}
  className="flex items-center gap-2 mb-6 bg-zinc-900/50 border border-white/5 p-1.5 pr-3 rounded-lg mx-auto lg:mx-0 hover:bg-zinc-800/50 transition-colors"
>
  <img 
    src={DataImage.Danil} 
    alt="Danil" 
    style={{ width: '800px', height: '800px' }}
    className="object-cover rounded-md flex-shrink-0"
  />
  
  <div className="flex flex-col">
    <q className="text-[10px] leading-[1.2] italic text-zinc-400 font-medium block max-w-[150px]">
      Chasing sunsets and capturing moments.
    </q>
  </div>
</motion.div>
              
              <motion.h1 variants={scrollReveal} className="text-3xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter text-center lg:text-left">
                Hi, I'm <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                  Muhammad Danil
                </span>
              </motion.h1>

              {/* Info Cards */}
              <motion.div variants={scrollReveal} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl transition-all hover:border-blue-500/50 group">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 group-hover:text-blue-400 transition-colors">Domisili</p>
                  <p className="text-base md:text-lg font-semibold text-zinc-200">Kota Malang</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl transition-all hover:border-blue-500/50 group">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 group-hover:text-blue-400 transition-colors">Kelas</p>
                  <p className="text-base md:text-lg font-semibold text-zinc-200">T2E</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl transition-all hover:border-blue-500/50 sm:col-span-2 group">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 group-hover:text-blue-400 transition-colors">Program Studi</p>
                  <p className="text-base md:text-lg font-semibold text-zinc-200">D-III Teknologi Informasi — Fakultas Vokasi — Univ. Brawijaya</p>
                </div>
              </motion.div>

              {/* --- SECTION ABOUT ME --- */}
              <motion.div 
                id="aboutme" 
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="scroll-mt-28"
              >
                {/* Judul Pemisah About Me */}
                <div className="mb-8 text-center lg:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 italic tracking-tighter">About Me</h2>
                  <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
                </div>

                {/* Konten Deskripsi */}
                <div className="p-6 md:p-10 bg-blue-500/5 border-l-4 border-blue-600 rounded-r-3xl shadow-2xl shadow-blue-900/5 backdrop-blur-sm">
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-lg text-justify mb-6">
                    Saya adalah <span className="text-white font-medium">Muhammad Danil</span>, 
                    mahasiswa aktif program studi <strong>D-III Teknologi Informasi di Universitas Brawijaya</strong>. 
                    Berdomisili di Kota Malang, saya memiliki ketertarikan mendalam pada dunia pengembangan perangkat lunak 
                    dan solusi teknologi digital. Saat ini, saya tergabung dalam kelas <strong>T2E</strong>, 
                    di mana saya secara intensif mengasah kemampuan teknis baik dalam pemrograman maupun manajemen infrastruktur TI. 
                  </p>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-lg text-justify">
                    Saya berdedikasi untuk terus mengeksplorasi tren teknologi terbaru guna menciptakan solusi inovatif 
                    yang relevan dengan kebutuhan industri masa depan. Dengan latar belakang akademis yang kuat, 
                    saya berkomitmen untuk mengembangkan <em>soft skills</em> dan keahlian teknis secara seimbang. 
                    Saya percaya bahwa kolaborasi dan pembelajaran berkelanjutan adalah kunci utama untuk berkontribusi 
                    secara signifikan dalam ekosistem transformasi digital di Indonesia.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* --- KOLOM FOTO DENGAN DYNAMIC GLOW --- */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 self-start flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative group max-w-[280px] sm:max-w-md lg:max-w-none w-full"
              >
                <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 rounded-[3rem] blur-[60px] opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
                <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 via-purple-500 via-pink-500 to-blue-500 rounded-[2rem] opacity-70 group-hover:opacity-100 blur-[2px] animate-spin-slow"></div>

                <div className="relative bg-black rounded-3xl overflow-hidden border border-white/10 z-10">
                  <img 
                    src={DataImage.Danil} 
                    alt="Nizam Profile" 
                    className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-2"
                    style={{ maxHeight: '500px', width: 'auto', margin: '0 auto', display: 'block'}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/30 blur-3xl rounded-full mix-blend-screen animate-bounce duration-[3000ms]"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/30 blur-3xl rounded-full mix-blend-screen animate-bounce duration-[4000ms]"></div>
              </motion.div>
            </div>
          </div>

          {/* --- SECTION ACHIEVEMENT --- */}
          <section id="achievement" className="mt-40 scroll-mt-28">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scrollReveal}
              className="mb-10 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 italic tracking-tighter">Achievements</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[

              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={scrollReveal}
                  whileHover={{ y: -10 }}
                  className="group p-8 bg-zinc-900/50 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-4xl block mb-4 relative z-10">{item.rank}</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 relative z-10 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* --- SECTION CONTACT --- */}
          <section id="contact" className="mt-40 pb-20 scroll-mt-28">
            <motion.div 
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 italic tracking-tighter">Get In Touch</h2>
              <p className="text-zinc-500 max-w-lg mx-auto text-sm md:text-base">
                Silahkan hubungi kontak di bawah ini untuk kolaborasi atau informasi lebih lanjut.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              {[
                { name: "WhatsApp", icon: "💬", link: "https://wa.me/62895383191080", color: "hover:border-green-500/50 group-hover:text-green-400" },
                { name: "Instagram", icon: "📸", link: "https://instagram.com/gondol.is_here", color: "hover:border-pink-500/50 group-hover:text-pink-400" },
                { name: "Email", icon: "✉️", link: "mailto:@gmail.com", color: "hover:border-red-500/50 group-hover:text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={scrollReveal}
                  whileHover={{ y: -5 }}
                  className={`group flex items-center gap-4 p-4 px-6 md:px-8 bg-zinc-900/50 border border-white/10 rounded-2xl transition-all duration-300 ${social.color}`}
                >
                  <span className="text-xl md:text-2xl">{social.icon}</span>
                  <span className="font-bold tracking-widest text-[10px] md:text-xs uppercase">{social.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </section>

        </div>
      </main>

      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
          © {new Date().getFullYear()} Muhammad Danil. All Rights Reserved.
        </p> 
      </footer>
    </div>
  );
}

export default App;