import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Gift, Heart, Phone } from "lucide-react";
function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const weddingDate = new Date("2025-12-27T14:00:00");
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if(diff <= 0){setTimeLeft({days:0,hours:0,minutes:0,seconds:0});clearInterval(timer);}
      else{setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });}
    },1000);
    return ()=>clearInterval(timer);
  },[]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 font-serif text-gray-800">
      <audio src="/public/cancion.mp3" autoPlay loop controls className="mx-auto my-4"/>
      <motion.div initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-800">Valentina & Oscar</h1>
        <p className="mt-4 italic text-lg text-gray-600">"El tiempo nos enseñó que el amor verdadero no se busca, se construye..."</p>
      </motion.div>
      <div className="flex justify-center gap-4 text-center text-blue-900 font-bold mb-8">
        {["days","hours","minutes","seconds"].map((unit,i)=>(<div key={i} className="bg-white/70 rounded-2xl shadow-md p-4">
          <p className="text-2xl">{timeLeft[unit]}</p><p className="text-sm capitalize">{unit}</p></div>))}
      </div>
      <section className="text-center px-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Ceremonia</h2>
        <p className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-green-600"/>Parroquia Sagrada Familia</p>
        <a href="https://maps.app.goo.gl/GvMXy7voe6GC34PX9" target="_blank" className="text-blue-600 underline">Ver ubicación</a>
      </section>
      <section className="text-center px-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Recepción</h2>
        <p className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-green-600"/>Finca La Cabaña, vereda San Marino Combia</p>
        <a href="https://maps.app.goo.gl/2kSDxsXVYJQLr59j8" target="_blank" className="text-blue-600 underline">Ver ubicación</a>
      </section>
      <section className="bg-white/80 rounded-2xl shadow-md mx-6 p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2"><Clock className="w-5 h-5"/>Itinerario</h2>
        <ul className="mt-4 space-y-2 text-left">
          <li>⛪ 2:00 PM - Ceremonia católica</li>
          <li>🍷 6:30 PM - Recepción</li>
          <li>🎤 7:00 PM - Protocolo</li>
          <li>🍽️ 9:00 PM - Cena</li>
          <li>🎶 10:30 PM - Fiestuki</li>
        </ul>
      </section>
      <section className="bg-blue-50 rounded-2xl shadow-md mx-6 p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2"><Gift className="w-5 h-5"/>Sugerencia de regalo</h2>
        <p className="mt-2 italic">“Creemos que los regalos más grandes no se envuelven: se sienten en abrazos, sonrisas y buenos deseos. Si además quieren bendecirnos con un detalle, cualquier muestra de cariño será bienvenida con alegría.”</p>
      </section>
      <section className="text-center px-6 mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Confirmación de asistencia</h2>
        <p className="mb-4">Esta invitación es válida para los pases asignados a su nombre. Al confirmar, por favor indíquenos cuántas personas asistirán.</p>
        <a href="https://wa.me/573147443995?text=Hola%20Valentina%20y%20Oscar,%20confirmo%20mi%20asistencia%20a%20su%20boda." target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-md inline-flex items-center gap-2">
          <Phone className="w-5 h-5"/> Confirmar por WhatsApp
        </a>
      </section>
      <footer className="bg-blue-800 text-white text-center py-4 rounded-t-2xl">
        <p className="flex justify-center items-center gap-2">Con amor <Heart className="w-4 h-4 text-pink-300"/> Valentina & Oscar</p>
        <p className="text-sm mt-1">27 de diciembre de 2025</p>
      </footer>
    </div>
  );
}
export default App;