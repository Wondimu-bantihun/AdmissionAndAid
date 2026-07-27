import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Globe, 
  Award, 
  CreditCard, 
  FileText, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Smartphone,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export default function AdmissionsAndAid({ onStartPortal }) {
  // Active Sub-Nav Tab
  const [activeTab, setActiveTab] = useState('undergrad');
  
  // Accordion Expand States
  const [openCostSharing, setOpenCostSharing] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Application Tracker State
  const [searchAppId, setSearchAppId] = useState('');
  const [trackResult, setTrackResult] = useState(null);

  // telebirr Quick Pay Module State
  const [paymentPhone, setPaymentPhone] = useState('');
  const [paymentFeeType, setPaymentFeeType] = useState('CEP Registration (1,000 ETB)');
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle | processing | success

  // Handle Application Search
  const handleTrackApplication = (e) => {
    e.preventDefault();
    if (!searchAppId.trim()) return;

    // Simulated status check
    if (searchAppId.toUpperCase().startsWith('UOG-')) {
      setTrackResult({
        found: true,
        id: searchAppId.toUpperCase(),
        name: 'Abebe Kebede',
        program: 'BSc in Software Engineering',
        status: 'Under Registrar Document Review',
        step: 2
      });
    } else {
      setTrackResult({ found: false });
    }
  };

  // Handle Quick Payment Simulation
  const handleQuickPay = (e) => {
    e.preventDefault();
    if (!paymentPhone || paymentPhone.length < 10) {
      alert('Please enter a valid Ethiopian phone number (e.g., 0912345678)');
      return;
    }
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What are the passing criteria for the Ethiopian University Entrance Examination (EUEE)?",
      a: "Pass marks are set annually by the Ministry of Education (MoE). Cut-off scores vary based on gender and region, with lower thresholds established for emerging regions and female candidates."
    },
    {
      q: "Is the National Graduate Admission Test (GAT) mandatory for MSc/PhD applicants?",
      a: "Yes. All applicants seeking entry into postgraduate programs (MSc or PhD) across Ethiopian public universities must take and pass the National GAT administered by the Ministry of Education prior to departmental entrance exams."
    },
    {
      q: "How does the Cost Sharing scheme work for undergraduate regular students?",
      a: "Regular Ethiopian undergraduate students receive government-subsidized tuition, meals, and lodging. Upon enrollment, students sign a contract committing to pay back a percentage of these costs through tax deductions after entering the workforce."
    },
    {
      q: "What payment options are available for Continuing Education (CEP) and registration fees?",
      a: "CEP evening students and postgraduate applicants can settle their tuition and registration fees instantly via the integrated telebirr module on this portal or via CBE bank transfer."
    },
    {
      q: "What documents do international applicants need to submit?",
      a: "International candidates must upload authenticated secondary school/degree credentials evaluated by the Educational Assessment and Examinations Agency (EAEA), a valid passport copy, and proof of English proficiency."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* HERO BANNER SECTION */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-sky-900 text-white p-8 md:p-10 rounded-2xl shadow-md border border-blue-800">
        <div className="max-w-3xl space-y-3">
          <span className="bg-sky-500/20 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-sky-400/30">
            Admissions Office • 2026 / 2027 Academic Year
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            ADMISSION & FINANCIAL AID
          </h1>
          <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
            Join Ethiopia’s premier hub for engineering and technological innovation at the University of Gondar Institute of Technology. Explore undergraduate, postgraduate, and CEP programs.
          </p>
        </div>
      </div>

      {/* SECONDARY ACADEMIC SUB-NAVBAR TABS */}
      <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs font-medium">
        <button
          onClick={() => setActiveTab('undergrad')}
          className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg transition ${
            activeTab === 'undergrad' ? 'bg-blue-900 text-white font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Undergraduate</span>
        </button>

        <button
          onClick={() => setActiveTab('postgrad')}
          className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg transition ${
            activeTab === 'postgrad' ? 'bg-blue-900 text-white font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Postgraduate</span>
        </button>

        <button
          onClick={() => setActiveTab('international')}
          className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg transition ${
            activeTab === 'international' ? 'bg-blue-900 text-white font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>International</span>
        </button>

        <button
          onClick={() => setActiveTab('scholarships')}
          className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg transition ${
            activeTab === 'scholarships' ? 'bg-blue-900 text-white font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Scholarships & Aid</span>
        </button>

        <button
          onClick={() => setActiveTab('tuition')}
          className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg transition ${
            activeTab === 'tuition' ? 'bg-blue-900 text-white font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Tuition & Fees</span>
        </button>
      </div>

      {/* MAIN CONTENT GRID (8-COLUMNS CONTENT / 4-COLUMNS SIDEBAR) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT COLUMN: DYNAMIC CONTENT PANEL (8 COLS) */}
        <div className="lg:col-span-8 space-y-6">

          {/* TAB 1: UNDERGRADUATE */}
          {activeTab === 'undergrad' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-800 border-b pb-3 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-blue-900" />
                <span>Undergraduate Admission Guidelines</span>
              </h2>

              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-bold text-slate-800 text-sm">1. Preparatory & EUEE Pass Marks</h3>
                  <p>Admissions for regular undergraduate programs are managed centrally by the Ethiopian Ministry of Education (MoE). Candidates must meet the annual EUEE national cut-off points assigned for engineering streams.</p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-bold text-slate-800 text-sm">2. Post-Basic & Diploma Pathways</h3>
                  <p>Applicants holding accredited TVET Level V diplomas in relevant technical fields can apply for advanced placement in Continuing Education Programs (CEP Evening/Weekend) subject to entrance exams.</p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-bold text-slate-800 text-sm">3. Continuing Education Program (CEP)</h3>
                  <p>Designed for working professionals. Classes are conducted on weekday evenings and weekends across the Gondar campuses.</p>
                </div>
              </div>

              {/* COLLAPSIBLE STEP-BY-STEP COST SHARING BOX */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenCostSharing(!openCostSharing)}
                  className="w-full bg-slate-100 p-4 text-left flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-200 transition"
                >
                  <span>v Step-by-Step Cost Sharing Process for Regular Students</span>
                  {openCostSharing ? <ChevronUp className="w-4 h-4 text-slate-600" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}
                </button>

                {openCostSharing && (
                  <div className="p-4 bg-white text-xs text-slate-600 space-y-2 border-t border-slate-200">
                    <p className="flex items-start space-x-2">
                      <span className="font-bold text-blue-900">Step 1:</span>
                      <span>Sign the Ministry of Education Cost Sharing Contract upon campus orientation.</span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="font-bold text-blue-900">Step 2:</span>
                      <span>Choose between service options (Tuition-only or Full Tuition + Boarding/Lodging).</span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="font-bold text-blue-900">Step 3:</span>
                      <span>Obtain Tax Identification Number (TIN) upon graduation to begin post-employment repayment.</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: POSTGRADUATE */}
          {activeTab === 'postgrad' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-800 border-b pb-3 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-900" />
                <span>Postgraduate (MSc & PhD) Admission Guidelines</span>
              </h2>

              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start space-x-3 text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Mandatory National GAT Exam</h4>
                    <p className="mt-1">All MSc and PhD applicants must pass the National Graduate Admission Test (NGAT) prior to departmental interviews.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <h3 className="font-bold text-slate-800 text-sm">General Admission Requirements:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Bachelor’s degree in a related engineering discipline with a minimum CGPA of 2.75 for regular enrollment.</li>
                    <li>Two official recommendation letters from academic or professional referees.</li>
                    <li>Official transcript sent directly from prior university registrar to UoG.</li>
                    <li>For PhD candidates: Approved preliminary research proposal concept note.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERNATIONAL */}
          {activeTab === 'international' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-800 border-b pb-3 flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-900" />
                <span>International Admissions & Visa Guidance</span>
              </h2>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>UoG Institute of Technology welcomes international students from around the world. International candidates must submit certified foreign academic credentials for equivalent evaluation by EAEA.</p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-bold text-slate-800 text-sm">Student Visa & Immigration Support</h3>
                  <p>Upon official acceptance, the International Student Affairs Office assists with issuing official sponsorship letters for Ethiopian Student Visa processing at Ethiopian embassies or online via e-Visa.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SCHOLARSHIPS */}
          {activeTab === 'scholarships' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-800 border-b pb-3 flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-900" />
                <span>Scholarships & Teaching Assistantships</span>
              </h2>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-bold text-slate-800 text-sm">Graduate Graduate Assistantships (GA)</h3>
                  <p>Top-performing MSc students may be offered Graduate Assistant positions within IoT engineering departments, covering full tuition waiver alongside a monthly stipend for teaching or lab assistance.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TUITION & TELEBIRR PAYMENT MODULE */}
          {activeTab === 'tuition' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-800 border-b pb-3 flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-blue-900" />
                <span>Tuition Schedule & telebirr Payment</span>
              </h2>

              {/* TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="p-3 border border-slate-200 font-bold">Category / Program</th>
                      <th className="p-3 border border-slate-200 font-bold">Registration Fee</th>
                      <th className="p-3 border border-slate-200 font-bold">Tuition Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr>
                      <td className="p-3 border border-slate-200">Undergraduate CEP (Evening)</td>
                      <td className="p-3 border border-slate-200">500 ETB</td>
                      <td className="p-3 border border-slate-200">850 ETB / Credit Hour</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200">Postgraduate MSc (Evening/Weekend)</td>
                      <td className="p-3 border border-slate-200">1,000 ETB</td>
                      <td className="p-3 border border-slate-200">1,200 ETB / Credit Hour</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200">International Undergrad</td>
                      <td className="p-3 border border-slate-200">$100 USD</td>
                      <td className="p-3 border border-slate-200">$150 USD / Credit Hour</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* INTEGRATED QUICK TELEBIRR PAYMENT */}
              <div className="p-5 bg-sky-50 border border-sky-200 rounded-xl space-y-4">
                <div className="flex items-center space-x-2 text-sky-950 font-bold text-sm">
                  <Smartphone className="w-5 h-5 text-sky-600" />
                  <span>Pay CEP & Admin Fees via telebirr</span>
                </div>

                {paymentStatus === 'idle' && (
                  <form onSubmit={handleQuickPay} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Fee Type</label>
                        <select 
                          value={paymentFeeType}
                          onChange={(e) => setPaymentFeeType(e.target.value)}
                          className="w-full border border-slate-300 rounded-md p-2 text-xs outline-none bg-white"
                        >
                          <option>CEP Registration Fee (500 ETB)</option>
                          <option>Postgraduate Application Fee (1,000 ETB)</option>
                          <option>Transcript Verification Fee (300 ETB)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">telebirr Phone Number</label>
                        <input 
                          type="text" 
                          placeholder="09XXXXXXXX"
                          value={paymentPhone}
                          onChange={(e) => setPaymentPhone(e.target.value)}
                          className="w-full border border-slate-300 rounded-md p-2 text-xs outline-none bg-white"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs py-2.5 rounded-md transition shadow-sm"
                    >
                      Pay Now via telebirr
                    </button>
                  </form>
                )}

                {paymentStatus === 'processing' && (
                  <div className="py-4 text-center space-y-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sky-600 mx-auto"></div>
                    <p className="text-xs font-bold text-sky-900">Sending USSD Prompt to {paymentPhone}...</p>
                  </div>
                )}

                {paymentStatus === 'success' && (
                  <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-md text-emerald-900 text-xs flex items-center justify-between">
                    <span className="font-bold">✓ Payment Successful! Transaction Receipt Generated.</span>
                    <button 
                      onClick={() => setPaymentStatus('idle')}
                      className="text-[11px] underline text-emerald-800 font-semibold"
                    >
                      New Payment
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: CONTEXTUAL UTILITY SIDEBAR (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">

          {/* WIDGET 1: ACTION BOX */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-6 rounded-xl shadow-md border border-blue-800 space-y-4">
            <h3 className="text-base font-bold">Ready to Apply?</h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              Submit your academic documents and register for the upcoming academic semester online.
            </p>
            <div className="text-xs space-y-1 text-slate-300 border-t border-blue-800/80 pt-3">
              <p>• Fall Semester Deadline: <strong>September 15</strong></p>
              <p>• Spring Semester Deadline: <strong>January 30</strong></p>
            </div>
            <button 
              onClick={onStartPortal}
              className="w-full bg-sky-500 hover:bg-sky-400 text-blue-950 font-bold text-xs py-3 px-4 rounded-lg transition shadow-sm flex items-center justify-center space-x-2"
            >
              <span>Start Online Portal</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* WIDGET 2: CRITICAL NOTICE BOX */}
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl space-y-2 text-amber-900">
            <div className="flex items-center space-x-2 font-bold text-xs text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>National GAT Requirement Notice</span>
            </div>
            <p className="text-xs leading-relaxed">
              MSc/PhD candidates must hold a valid GAT score before departmental exam registration.
            </p>
          </div>

          {/* WIDGET 3: DOWNLOADS & RESOURCE LIBRARY */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-xs text-slate-800 border-b pb-2 uppercase tracking-wider">Downloads & Forms</h4>
            <div className="space-y-2 text-xs">
              <a href="#" className="flex items-center space-x-2 text-blue-900 hover:underline">
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Cost Sharing Contract Agreement (PDF)</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-blue-900 hover:underline">
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Postgraduate Recommendation Form</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-blue-900 hover:underline">
                <FileText className="w-4 h-4 text-slate-400" />
                <span>CEP Fee Structure & Schedule 2026</span>
              </a>
            </div>
          </div>

          {/* WIDGET 4: LIVE APPLICATION TRACKER */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-xs text-slate-800 border-b pb-2 uppercase tracking-wider">Track Application Status</h4>
            <form onSubmit={handleTrackApplication} className="space-y-2">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="App ID (e.g. UOG-8821)"
                  value={searchAppId}
                  onChange={(e) => setSearchAppId(e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 text-xs outline-none focus:ring-1 focus:ring-blue-900"
                />
                <button 
                  type="submit"
                  className="bg-blue-900 text-white px-3 py-2 rounded-md hover:bg-blue-800 transition"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {trackResult && (
              <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                {trackResult.found ? (
                  <>
                    <p className="font-bold text-slate-800">{trackResult.name}</p>
                    <p className="text-slate-500">{trackResult.program}</p>
                    <div className="pt-1 flex items-center space-x-1.5 text-blue-900 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-sky-600" />
                      <span>{trackResult.status}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-red-600 font-medium">Application ID not found in system.</p>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* STANDALONE FAQ SECTION (INDEPENDENT ACCORDION SECTION) */}
      <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 mt-12">
        <div className="border-b pb-3">
          <h2 className="text-lg font-bold text-slate-800">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-xs text-slate-500 mt-0.5">Common queries regarding entrance exams, cost-sharing, CEP fees, and GAT requirements.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden transition">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-900 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}