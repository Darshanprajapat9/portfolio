import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  className?: string;
}

const Map = ({ className = "" }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>("");
  const [showInput, setShowInput] = useState(true);

  const initMap = (accessToken: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [78, 20], // India center
      pitch: 45,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(20, 20, 30)',
        'high-color': 'rgb(40, 40, 60)',
        'horizon-blend': 0.2,
      });
    });

    // Rotation animation
    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;

    function spinGlobe() {
      if (!map.current) return;
      
      const zoom = map.current.getZoom();
      if (!userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', () => { spinGlobe(); });

    spinGlobe();
    setShowInput(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      localStorage.setItem('mapbox_token', token);
      initMap(token);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setToken(savedToken);
      initMap(savedToken);
    }
    
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showInput) {
    return (
      <div className={`relative w-full h-full min-h-[400px] rounded-2xl bg-card flex items-center justify-center ${className}`}>
        <div className="p-8 text-center max-w-md">
          <div className="text-6xl mb-4">🌍</div>
          <h3 className="text-xl font-bold mb-2">Interactive Globe</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Enter your Mapbox public token to enable the interactive globe. 
            Get one free at <a href="https://mapbox.com" target="_blank" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="pk.your_mapbox_token_here"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition-colors text-sm"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Enable Globe
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-lg overflow-hidden" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-2xl" />
    </div>
  );
};

export default Map;
