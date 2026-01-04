import React, { useState } from "react";
import { Briefcase, MapPin, Clock, DollarSign, ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { jobs } from "../assets/assets";

const CareersSection = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [filter, setFilter] = useState("all");

  const departments = ["all", ...new Set(jobs.map(job => job.department))];

  const filteredJobs = filter === "all"
    ? jobs
    : jobs.filter(job => job.department === filter);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const getExperienceBadgeColor = (experience) => {
    switch (experience) {
      case "Entry-Level":
        return "from-green-500 to-emerald-600";
      case "Mid-Level":
        return "from-blue-500 to-cyan-600";
      case "Senior":
        return "from-purple-500 to-indigo-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-24 px-4 md:px-16 lg:px-24 xl:px-40 bg-linear-to-b from-white to-gray-50">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Join Our Team
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] mx-auto rounded-full mt-4"></div>
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Be part of our Caribbean marketplace journey. We're building a vibrant,
          innovative platform connecting buyers and sellers across the region.
        </p>
      </div>

      {/* Department Filter */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setFilter(dept)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === dept
              ? "bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
          >
            {dept === "all" ? "All Positions" : dept}
          </button>
        ))}
      </div>

      {/* Job Count */}
      <div className="mt-8 text-center text-sm text-gray-600">
        Showing <span className="font-semibold text-gray-800">{filteredJobs.length}</span> position{filteredJobs.length !== 1 && 's'}
      </div>

      {/* Job Cards */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{job.department}</p>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-linear-to-r ${getExperienceBadgeColor(job.experience)} whitespace-nowrap`}>
                  {job.experience}
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {job.description}
              </p>

              {/* Job Meta Info */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Posted {new Date(job.posted).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            {expandedJob === job.id && (
              <div className="p-6 bg-gray-50 space-y-4 animate-in">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Responsibilities</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF6B6B] mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Requirements</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00B4D8] mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.niceToHave && job.niceToHave.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Nice to Have</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {job.niceToHave.map((nice, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#FFD93D] mt-1">•</span>
                          <span>{nice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Card Footer */}
            <div className="p-6 bg-white border-t border-gray-100 flex items-center gap-3">
              <button
                onClick={() => toggleJob(job.id)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                {expandedJob === job.id ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Less Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    More Details
                  </>
                )}
              </button>

              <button
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm 
                font-semibold text-white   rounded-md bg-linear-to-r from-[#FF6B6B] to-[#FFD93D]
                 hover:bg-linear-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800
                  transition-all duration-300" >
                <Briefcase className="w-4 h-4" />
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="mt-12 text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">No positions found</h3>
          <p className="text-gray-600">Try selecting a different department</p>
        </div>
      )}


    </section>
  );
};

export default CareersSection;