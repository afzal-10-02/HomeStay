import React from "react";

const Modal = ({ dest, onClose, onBook }) => {
  if (!dest) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-sikkim-earth">{dest.name}</h2>
              <p className="text-sikkim-teal font-medium">{dest.region}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-sikkim-cream p-4 rounded-xl">
              <div className="flex items-center space-x-2">
                <i className="fas fa-mountain text-sikkim-green"></i>
                <span className="font-medium">Altitude</span>
              </div>
              <p className="text-2xl font-bold text-sikkim-earth mt-2">{dest.altitude}</p>
            </div>
            <div className="bg-sikkim-cream p-4 rounded-xl">
              <div className="flex items-center space-x-2">
                <i className="fas fa-home text-sikkim-gold"></i>
                <span className="font-medium">Homestays</span>
              </div>
              <p className="text-2xl font-bold text-sikkim-earth mt-2">{dest.homestays}+</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-sikkim-earth mb-3">Best Time to Visit</h3>
            <p className="text-gray-600">{dest.bestSeason} - Enjoy perfect weather conditions for exploring {dest.name}</p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-sikkim-green font-bold text-2xl">{dest.price}</span>
              <span className="text-gray-500">/ night</span>
            </div>
            <button
              onClick={() => onBook(dest.name)}
              className="bg-gradient-to-r from-sikkim-green to-sikkim-teal text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
