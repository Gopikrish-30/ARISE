<div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-64 flex items-center justify-center cursor-pointer hover:from-blue-200 hover:to-blue-300 transition-all duration-300 group">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-blue-700 font-medium">"IIT Palakkad" Indian Institute of Technology Palakkad</p>
                  <p className="text-blue-600 text-sm">Palakkad, Kerala - 678 557</p>
                  <p className="text-blue-600 text-sm">Click to open interactive map</p>
                </div>
              </div>
=======
              {/* Embedded Google Map */}
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0848205950188!2d76.72635367508903!3d10.804815489345648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba869e43f0f473f%3A0x1a53e6dc39a95498!2sIndian%20Institute%20Of%20Technology%E2%80%93Palakkad%20(IIT%E2%80%93Palakkad)!5e0!3m2!1sen!2sin!4v1751198400503!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%", height: "450px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIT Palakkad Location"
                ></iframe>
              </div>
