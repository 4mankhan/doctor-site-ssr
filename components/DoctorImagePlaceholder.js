import { Sparkles, Heart } from "lucide-react";

export default function DoctorImagePlaceholder() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-[4/5] rounded-[32px] bg-gradient-to-br from-[#E8F6FA] to-[#DDF5EE] p-1 shadow-[0_20px_40px_-15px_rgba(15,118,110,0.1)] overflow-hidden flex items-center justify-center group">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-[30px]" />
      <div className="absolute top-10 left-10 text-[#0F766E]/20 animate-pulse">
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-12 right-12 text-[#0F766E]/20">
        <Heart size={40} fill="currentColor" />
      </div>
      
      {/* Central Illustration Area */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/60 backdrop-blur-md rounded-[24px] border border-white/50 shadow-sm w-[70%] h-[60%] group-hover:scale-[1.02] transition-transform duration-500">
        <div className="h-24 w-24 rounded-full bg-[#0F766E] text-white flex items-center justify-center mb-6 shadow-[0_8px_20px_-6px_rgba(15,118,110,0.4)]">
           <span className="font-heading font-bold text-3xl">SK</span>
        </div>
        <h3 className="font-heading font-bold text-xl text-[#17212B] text-center mb-1">Dr. Sunil Kohli</h3>
        <p className="text-sm font-medium text-[#0F766E] text-center bg-[#E8F6FA] px-3 py-1 rounded-full">Senior Pediatrician</p>
      </div>
    </div>
  );
}
