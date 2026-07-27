import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Upload, 
  User, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Globe, 
  DollarSign, 
  AlertCircle 
} from 'lucide-react';

export default function ApplicationPortal({ initialLevel = 'postgrad', onBackToHome }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  // Classification State
  const [applicantType, setApplicantType] = useState('national'); // 'national' | 'international'
  const [isScholarshipApplicant, setIsScholarshipApplicant] = useState(false);

  // Unified Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: '',
    email: '',
    phone: '',
    gender: 'Male',
    nationalIdNumber: '',
    passportNumber: '',
    nationality: '',

    // Step 2: Program Choice
    level: initialLevel, // 'undergrad' | 'postgrad' | 'phd'
    program: 'MSc in Software Engineering',
    admissionType: 'Regular',

    // Step 3: Academic Qualifications
    previousDegree: '',
    institution: '',
    cgpa: '',
    ngatRollNo: '',
    eueeScore: '',

    // Step 4: Uploaded Documents (File objects)
    grade8Certificate: null,
    grade12Certificate: null,
    highschoolTranscripts: null,
    nationalIdDoc: null,
    bscDegreeCertificate: null,
    mscDegreeCertificate: null,
    academicTranscripts: null,
    ngatResultDoc: null,
    recommendationLetter1: null,
    recommendationLetter2: null,
    researchProposalDoc: null,
    sponsorshipLetterDoc: null,
    passportCopy: null,
    herqaLetter: null,
    embassyLetter: null,
    englishProficiencyDoc: null,
    translatedTranscripts: null,
    scholarshipSponsorshipLetter: null,
    motivationLetter: null,
    financialNeedDoc: null,
    scholarshipRecommendation: null,
    medicalCertificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleNext = () => {
    if (step < 5) setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `UOG-${Math.floor(10000 + Math.random() * 90000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  // Reusable File Upload Slot Component (no native `required` on hidden input to avoid focus blocking)
  const FileUploadSlot = ({ id, label, description, required = true, accept = ".pdf,.jpg,.jpeg,.png" }) => {
    const file = formData[id];

    return (
      <div className="p-4 border border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-blue-50/40 hover:border-blue-400 transition-all space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <label htmlFor={id} className="block text-xs font-bold text-slate-800 cursor-pointer">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            {description && <p className="text-[10px] text-slate-500">{description}</p>}
          </div>
          {file && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
        </div>

        <div className="flex items-center space-x-2">
          <input 
            type="file" 
            id={id}
            name={id} 
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
          />
          <label 
            htmlFor={id} 
            className="cursor-pointer text-[11px] font-semibold bg-blue-900 hover:bg-blue-800 text-white py-1.5 px-3 rounded-md flex items-center space-x-1.5 transition"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{file ? 'Change File' : 'Browse File'}</span>
          </label>
          <span className="text-[11px] text-slate-500 truncate max-w-[200px]">
            {file ? file.name : 'No file selected'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      
      {/* HEADER BAR */}
      <div className="flex items-center justify-between border-b pb-4">
        <button 
          onClick={onBackToHome}
          className="flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-blue-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Admissions Main</span>
        </button>
        <div className="text-right">
          <h1 className="text-base font-extrabold text-blue-950 uppercase tracking-tight">Online Admission Portal</h1>
          <p className="text-[11px] text-slate-500">University of Gondar • New Curriculum Admissions</p>
        </div>
      </div>

      {/* APPLICANT CLASSIFICATION BAR */}
      <div className="bg-slate-100 p-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
          <Globe className="w-4 h-4 text-blue-900" />
          <span>Applicant Category:</span>
        </div>
        <div className="flex space-x-2">
          <button 
            type="button" 
            onClick={() => setApplicantType('national')} 
            className={`px-4 py-1.5 text-xs font-bold rounded-xl transition ${
              applicantType === 'national' 
                ? 'bg-blue-900 text-white shadow-sm' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            National Student
          </button>
          <button 
            type="button" 
            onClick={() => setApplicantType('international')} 
            className={`px-4 py-1.5 text-xs font-bold rounded-xl transition ${
              applicantType === 'international' 
                ? 'bg-blue-900 text-white shadow-sm' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            International Student
          </button>
        </div>
      </div>

      {/* SUCCESS SCREEN */}
      {submitted ? (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">Application Submitted Successfully!</h2>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Your application for <strong>{formData.program}</strong> ({formData.level.toUpperCase()}) has been received and queued for review.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-sm mx-auto space-y-1">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Your Application Tracking ID</span>
            <p className="text-2xl font-black text-blue-900 tracking-wider">{appId}</p>
            <p className="text-[10px] text-amber-700 font-medium">Keep this ID safe for status checks.</p>
          </div>

          <div className="pt-4 border-t flex justify-center space-x-4">
            <button 
              onClick={onBackToHome}
              className="bg-blue-900 text-white text-xs font-bold py-2.5 px-6 rounded-lg hover:bg-blue-800 transition"
            >
              Return to Admissions Home
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* STEP PROGRESS BAR */}
          <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold">
            {[
              { num: 1, label: 'Personal' },
              { num: 2, label: 'Program' },
              { num: 3, label: 'Academic' },
              { num: 4, label: 'Documents' },
              { num: 5, label: 'Review' }
            ].map((s) => (
              <div 
                key={s.num} 
                onClick={() => setStep(s.num)}
                className={`py-2 px-1 rounded-lg border cursor-pointer transition ${
                  step === s.num 
                    ? 'bg-blue-900 text-white border-blue-900 font-bold' 
                    : step > s.num 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                    : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-center space-x-1">
                  <span>Step {s.num}</span>
                  {step > s.num && <Check className="w-3 h-3" />}
                </div>
                <div className="text-[10px] font-normal truncate">{s.label}</div>
              </div>
            ))}
          </div>

          {/* FORM CONTAINER */}
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">

            {/* STEP 1: PERSONAL INFORMATION */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-slate-800 border-b pb-2 flex items-center space-x-2">
                  <User className="w-5 h-5 text-blue-900" />
                  <span>Step 1: Personal Details ({applicantType === 'international' ? 'International' : 'National'})</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Full Name (First, Middle, Last) *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange}
                      placeholder="e.g. Abebe Kebede Tassew" 
                      className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="e.g. abebe@example.com" 
                      className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="+251 9XXXXXXXX" 
                      className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                    />
                  </div>

                  {applicantType === 'national' ? (
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">National ID / Fayda FAN Number *</label>
                      <input 
                        type="text" 
                        name="nationalIdNumber" 
                        value={formData.nationalIdNumber} 
                        onChange={handleChange}
                        placeholder="e.g. Fayda ID or Kebele ID No." 
                        className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Country of Citizenship / Nationality *</label>
                        <input 
                          type="text" 
                          name="nationality" 
                          value={formData.nationality} 
                          onChange={handleChange}
                          placeholder="e.g. Kenya, Uganda, Sudan" 
                          className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">International Passport Number *</label>
                        <input 
                          type="text" 
                          name="passportNumber" 
                          value={formData.passportNumber} 
                          onChange={handleChange}
                          placeholder="e.g. A12345678" 
                          className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2: PROGRAM SELECTION */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-slate-800 border-b pb-2 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-blue-900" />
                  <span>Step 2: Academic Level & Program Choice</span>
                </h2>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Select Academic Stream *</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'undergrad', title: 'Undergraduate', desc: 'BSc Degrees' },
                        { id: 'postgrad', title: 'Postgraduate (MSc)', desc: 'Master Degrees' },
                        { id: 'phd', title: 'Doctoral (PhD)', desc: 'PhD Programs' }
                      ].map(level => (
                        <button
                          key={level.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, level: level.id }))}
                          className={`p-3 rounded-lg border text-left transition ${
                            formData.level === level.id 
                              ? 'border-blue-900 bg-blue-50 text-blue-900 font-bold' 
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="text-xs font-bold">{level.title}</div>
                          <div className="text-[10px] text-slate-500 font-normal">{level.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Target Program *</label>
                    <select 
                      name="program" 
                      value={formData.program} 
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900 bg-white"
                    >
                      {formData.level === 'undergrad' && (
                        <>
                          <option value="BSc in Computer Engineering">BSc in Computer Engineering</option>
                          <option value="BSc in Software Engineering">BSc in Software Engineering</option>
                          <option value="BSc in Electrical & Computer Engineering">BSc in Electrical & Computer Engineering</option>
                          <option value="BSc in Civil Engineering">BSc in Civil Engineering</option>
                        </>
                      )}
                      {formData.level === 'postgrad' && (
                        <>
                          <option value="MSc in Software Engineering">MSc in Software Engineering</option>
                          <option value="MSc in Computer Networks & Security">MSc in Computer Networks & Security</option>
                          <option value="MSc in Electrical Power Engineering">MSc in Electrical Power Engineering</option>
                        </>
                      )}
                      {formData.level === 'phd' && (
                        <>
                          <option value="PhD in Computer Engineering">PhD in Computer Engineering</option>
                          <option value="PhD in Information Technology">PhD in Information Technology</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: ACADEMIC QUALIFICATIONS */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-slate-800 border-b pb-2 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-900" />
                  <span>Step 3: Academic Background Details</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {formData.level === 'undergrad' ? (
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">High School Exam Score / Average *</label>
                      <input 
                        type="number" 
                        name="eueeScore" 
                        value={formData.eueeScore} 
                        onChange={handleChange}
                        placeholder={applicantType === 'national' ? "e.g. 415" : "e.g. GPA or Average Score"} 
                        className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Previous Degree Title *</label>
                        <input 
                          type="text" 
                          name="previousDegree" 
                          value={formData.previousDegree} 
                          onChange={handleChange}
                          placeholder="e.g. BSc in Computer Science" 
                          className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Graduating Institution *</label>
                        <input 
                          type="text" 
                          name="institution" 
                          value={formData.institution} 
                          onChange={handleChange}
                          placeholder="e.g. University of Gondar / Foreign University" 
                          className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">CGPA (Scale of 4.00) *</label>
                        <input 
                          type="number" 
                          step="0.01" 
                          name="cgpa" 
                          value={formData.cgpa} 
                          onChange={handleChange}
                          placeholder="e.g. 3.42" 
                          className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                        />
                      </div>

                      {applicantType === 'national' && (
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">National GAT (NGAT) Roll No / Score *</label>
                          <input 
                            type="text" 
                            name="ngatRollNo" 
                            value={formData.ngatRollNo} 
                            onChange={handleChange}
                            placeholder="e.g. NGAT-2026-XXXX" 
                            className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:ring-1 focus:ring-blue-900" 
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* STEP 4: REQUIRED DOCUMENTS UPLOAD */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-base font-bold text-slate-800 border-b pb-2 flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-blue-900" />
                  <span>Step 4: Upload Required Documents</span>
                </h2>

                {applicantType === 'national' ? (
                  formData.level === 'undergrad' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FileUploadSlot id="grade8Certificate" label="1. Grade 8 National Certificate" description="Scanned official Grade 8 certificate" />
                      <FileUploadSlot id="grade12Certificate" label="2. Grade 12 National Certificate" description="Scanned copy of Grade 12 result card" />
                      <FileUploadSlot id="highschoolTranscripts" label="3. Grade 9 - 12 High School Transcripts" description="Complete official transcripts from Grade 9 through 12" />
                      <FileUploadSlot id="nationalIdDoc" label="4. National ID Card" description="Copy of Fayda Digital ID or Kebele ID" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FileUploadSlot id="bscDegreeCertificate" label="1. BSc Degree Certificate" description="Scanned PDF of Bachelor Degree Certificate" />
                      {formData.level === 'phd' && (
                        <FileUploadSlot id="mscDegreeCertificate" label="1b. MSc Degree Certificate (PhD applicants)" description="Scanned PDF of Master Degree Certificate" />
                      )}
                      <FileUploadSlot id="academicTranscripts" label="2. Official Academic Transcripts" description="Scanned complete official university transcript(s)" />
                      <FileUploadSlot id="ngatResultDoc" label="3. NGAT Test Result Card" description="Official score card or pass certificate for National GAT" />
                      <FileUploadSlot id="nationalIdDoc" label="4. National ID Card" description="Copy of Fayda Digital ID or official Kebele ID" />
                      <FileUploadSlot id="recommendationLetter1" label="5. Recommendation Letter #1" description="Signed letter from an academic referee or employer" />
                      <FileUploadSlot id="recommendationLetter2" label="6. Recommendation Letter #2" description="Signed letter from second academic/professional referee" />
                      <FileUploadSlot id="researchProposalDoc" label="7. Preliminary Research Proposal" description="Concept note outlining proposed research focus (PDF)" />
                      <FileUploadSlot id="sponsorshipLetterDoc" label="8. Sponsorship Letter" description="Official commitment letter from sponsoring organization" required={false} />
                    </div>
                  )
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FileUploadSlot id="passportCopy" label="1. International Passport (Bio Page)" description="Clear scanned copy of active passport page" />
                    <FileUploadSlot id="herqaLetter" label="2. ETA / HERQA Equivalence Letter" description="Official authentication letter from Ethiopian ETA/HERQA agency" />
                    <FileUploadSlot id="embassyLetter" label="3. Ministry of Foreign Affairs / Embassy Letter" description="Clearance letter from home Embassy or MFA Ethiopia" />
                    <FileUploadSlot id="englishProficiencyDoc" label="4. Proof of English Proficiency" description="Medium of instruction letter, TOEFL (>=70) or IELTS (>=6.0)" />
                    <FileUploadSlot id="translatedTranscripts" label="5. Academic Transcripts (Sworn English Translation)" description="Official academic transcripts in English or sworn translation" />
                    <FileUploadSlot id="bscDegreeCertificate" label="6. Certificate of Degree / Secondary Diploma" description="Certified high school diploma or degree certificate" />
                    {formData.level !== 'undergrad' && (
                      <>
                        <FileUploadSlot id="recommendationLetter1" label="7. Recommendation Letter #1" description="Signed referee letter from professor or academic supervisor" />
                        <FileUploadSlot id="recommendationLetter2" label="8. Recommendation Letter #2" description="Signed referee letter from previous institution/employer" />
                        <FileUploadSlot id="researchProposalDoc" label="9. Concept Note / Preliminary Research Proposal" description="Required for MSc and PhD level applications" />
                      </>
                    )}
                  </div>
                )}

                {/* FINANCIAL AID & SCHOLARSHIP TOGGLE */}
                <div className="pt-4 border-t space-y-4">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-amber-700" />
                      <div>
                        <h4 className="text-xs font-bold text-amber-950">Financial Aid & Scholarship Consideration</h4>
                        <p className="text-[11px] text-amber-800">Are you applying for a University / Ministry Scholarship or submitting an external sponsorship letter?</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setIsScholarshipApplicant(true)}
                        className={`px-3 py-1 text-xs font-bold rounded-md transition ${
                          isScholarshipApplicant ? 'bg-amber-800 text-white' : 'bg-white text-slate-600 border'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsScholarshipApplicant(false)}
                        className={`px-3 py-1 text-xs font-bold rounded-md transition ${
                          !isScholarshipApplicant ? 'bg-amber-800 text-white' : 'bg-white text-slate-600 border'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  {isScholarshipApplicant && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <FileUploadSlot id="scholarshipSponsorshipLetter" label="S1. Official Sponsorship Letter / Commitment" description="Letter from employer, government ministry, NGO, or donor agency" />
                      <FileUploadSlot id="motivationLetter" label="S2. Scholarship Statement of Purpose (SOP)" description="1-2 page letter explaining why you merit financial aid (PDF)" />
                      <FileUploadSlot id="financialNeedDoc" label="S3. Proof of Financial Need / Hardship" description="Income certificate or embassy letter verifying financial status" required={false} />
                      <FileUploadSlot id="scholarshipRecommendation" label="S4. Institutional Nomination / Endorsement" description="Letter nominating you specifically for scholarship support" />
                      <FileUploadSlot id="medicalCertificate" label="S5. Official Medical Fitness Certificate" description="Required for full-scholarship awards and residential stay" />
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* STEP 5: REVIEW & CONFIRM */}
            {step === 5 && (
              <div className="space-y-4 text-xs">
                <h2 className="text-base font-bold text-slate-800 border-b pb-2">Step 5: Review & Confirm Application</h2>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div><span className="text-slate-500 block">Applicant Name:</span> <strong>{formData.fullName || 'Not specified'}</strong></div>
                    <div><span className="text-slate-500 block">Classification:</span> <strong className="uppercase">{applicantType}</strong></div>
                    <div><span className="text-slate-500 block">ID / Passport No:</span> <strong>{applicantType === 'national' ? (formData.nationalIdNumber || 'Not specified') : (formData.passportNumber || 'Not specified')}</strong></div>
                    <div><span className="text-slate-500 block">Target Stream:</span> <strong className="uppercase">{formData.level}</strong></div>
                    <div><span className="text-slate-500 block">Selected Program:</span> <strong>{formData.program}</strong></div>
                    <div><span className="text-slate-500 block">Scholarship Requested:</span> <strong>{isScholarshipApplicant ? 'Yes' : 'No'}</strong></div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 text-[11px] flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Please ensure all uploaded certificates, transcripts, and credentials are legible. Submitting fraudulent credentials will result in immediate rejection.</span>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between items-center pt-4 border-t">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 px-5 rounded-lg transition"
                >
                  Previous
                </button>
              ) : <div />}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold py-2.5 px-6 rounded-lg transition shadow-sm"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-6 rounded-lg transition shadow-sm"
                >
                  Submit Application
                </button>
              )}
            </div>

          </form>
        </>
      )}

    </div>
  );
}