import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { cn } from '../lib/utils';
import { Hospital, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

const geoUrl = "https://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json";

interface MexicoMapProps {
  className?: string;
}

const MexicoMap: React.FC<MexicoMapProps> = ({ className }) => {
  const pins = [
    // Baja California & West
    { coordinates: [-113.0, 27.5], icon: ShoppingCart, color: "text-blue-500", label: "Almacén Baja" },
    { coordinates: [-110.3, 24.1], icon: Hospital, color: "text-rose-500", label: "Sede La Paz" },
    
    // Northwest
    { coordinates: [-110.9, 29.1], icon: Hospital, color: "text-emerald-500", label: "Regional Sonora" },
    { coordinates: [-106.1, 28.6], icon: Hospital, color: "text-rose-500", label: "Sede Chihuahua" },
    { coordinates: [-104.9, 24.0], icon: ShoppingCart, color: "text-orange-500", label: "Logística Durango" },
    
    // Northeast & Gulf
    { coordinates: [-100.3, 25.7], icon: Hospital, color: "text-rose-500", label: "Nodo Monterrey" },
    { coordinates: [-98.2, 24.2], icon: ShoppingCart, color: "text-blue-500", label: "Puerto Tamaulipas" },
    { coordinates: [-96.1, 19.2], icon: ShoppingCart, color: "text-orange-500", label: "Aduana Veracruz" },
    
    // Central Cluster (Dense)
    { coordinates: [-103.3, 20.7], icon: Hospital, color: "text-rose-500", label: "Centro Guadalajara" },
    { coordinates: [-101.6, 21.1], icon: Hospital, color: "text-emerald-500", label: "Nodo Bajío" },
    { coordinates: [-99.1, 19.4], icon: Hospital, color: "text-rose-500", label: "Sede Central CDMX" },
    { coordinates: [-98.2, 19.0], icon: ShoppingCart, color: "text-blue-500", label: "Distribuidor Puebla" },
    { coordinates: [-100.4, 20.6], icon: ShoppingCart, color: "text-blue-500", label: "Almacén Querétaro" },
    
    // Southeast & Peninsula
    { coordinates: [-94.5, 18.0], icon: Hospital, color: "text-rose-500", label: "Sede Coatzacoalcos" },
    { coordinates: [-93.1, 17.5], icon: Hospital, color: "text-emerald-500", label: "Regional Tabasco" },
    { coordinates: [-89.6, 21.0], icon: ShoppingCart, color: "text-orange-500", label: "Logística Mérida" },
    { coordinates: [-86.8, 21.2], icon: ShoppingCart, color: "text-blue-500", label: "Puerto Cancún" },
    { coordinates: [-92.2, 14.9], icon: Hospital, color: "text-rose-500", label: "Nodo Tapachula" }
  ];

  return (
    <div className={cn("relative w-full h-[600px] flex items-center justify-center overflow-visible", className)}>
      {/* 3D Perspective Grid Floor */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)", 
          backgroundSize: "40px 40px",
          transform: "perspective(1200px) rotateX(60deg) scale(2.5) translateY(120px)",
          transformOrigin: "center center"
        }}
      ></div>

      <motion.div 
        initial={{ opacity: 0, rotateX: 20, y: 50 }}
        animate={{ opacity: 1, rotateX: 40, rotateZ: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full max-w-4xl cursor-default"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1400,
            center: [-102, 24]
          }}
          style={{
            width: "100%",
            height: "auto",
            filter: "drop-shadow(0 60px 80px rgba(0,0,0,0.2))",
            overflow: "visible"
          }}
        >
          {/* Shadow Layer */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={`${geo.rsmKey}-shadow`}
                  geography={geo}
                  fill="rgba(0,0,0,0.15)"
                  stroke="none"
                  style={{
                    default: { outline: "none", transform: "translateY(25px)" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Enhanced Depth / Side Layers (Thicker Slab) */}
          {[...Array(12)].map((_, i) => (
            <Geographies key={`depth-${i}`} geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={`${geo.rsmKey}-depth-${i}`}
                    geography={geo}
                    fill={i === 11 ? "#0D9488" : "#042F2E"}
                    stroke={i === 11 ? "#0F766E" : "none"}
                    strokeWidth={0.5}
                    style={{
                      default: { 
                        outline: "none", 
                        transform: `translateY(${11 - i}px)`,
                        filter: `brightness(${0.5 + i * 0.05})`
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          ))}

          {/* Markers with Elevation - Styled like the reference image */}
          {pins.map((pin, index) => (
            <Marker key={index} coordinates={pin.coordinates as [number, number]}>
              <g 
                className="cursor-pointer group"
                style={{ 
                  transform: "translateY(-15px) rotateZ(0deg) rotateX(0deg)", // Aligned with parent rotateZ: 0 and facing camera with rotateX: -45deg
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Pin Shadow on Map Surface */}
                <ellipse cx="0" cy="40" rx="6" ry="3" fill="rgba(0,0,0,0.3)" />
                
                {/* Visual Pin Design (Flat Circle facing camera) */}
                <g className="transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2">
                  {/* Pin Background Circle */}
                  <circle 
                    r={12} 
                    fill="white" 
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    className="drop-shadow-md"
                  />
                  
                  {/* Icon Component */}
                  <g transform="translate(-5, -5) scale(0.4)">
                    <pin.icon className={cn("w-24 h-24", pin.color)} strokeWidth={3} />
                  </g>

                  {/* Pulsing Aura */}
                  <circle r={14} cy="-1" fill="currentColor" fillOpacity={0} className={pin.color}>
                    <animate attributeName="r" from="12" to="28" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
                
                {/* Enhanced Tooltip */}
                <g className="opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <rect x={18} y={-14} width={120} height={28} rx={14} fill="#0F172A" />
                  <text x={30} y={4} fill="white" fontSize="10" fontWeight="900" className="uppercase tracking-widest">
                    {pin.label}
                  </text>
                  <path d="M18 0 L10 -2 L18 -4" fill="#0F172A" />
                </g>
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </motion.div>

      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
        <div className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30 shadow-xl">
          <p className="text-[10px] font-black text-teal-950 uppercase tracking-[0.2em]">Centro de Operaciones</p>
          <p className="text-[8px] font-bold text-teal-700/60 uppercase">Monitoreo en Tiempo Real</p>
        </div>
      </div>
    </div>
  );
};

export default MexicoMap;
