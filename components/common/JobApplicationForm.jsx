'use client';

import { useState } from 'react';

export default function JobApplicationForm({ positions = [] }) {
  const [form, setForm] = useState({ name:'', email:'', phone:'', position: positions[0]??'', experience:'', portfolio:'', message:'' });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.position)       e.position = 'Please select a position';
    if (!form.message.trim()) e.message = 'Please tell us about yourself';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--surface)] rounded-2xl p-10 border border-[var(--border-light)] text-center">
        <div className="w-14 h-14 bg-[var(--primary-light)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-[var(--text-primary)] mb-2">Application Submitted!</h3>
        <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
          Thank you for your interest in DIGITECH. Our HR team will review your application and get back to you within 3–5 business days.
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',position:positions[0]??'',experience:'',portfolio:'',message:'' }); }}
          className="px-6 py-2.5 bg-[var(--primary)] text-[var(--text-white)] text-sm font-semibold rounded-xl hover:bg-[var(--primary-dark)] transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  const cls = (f) =>
    `w-full px-4 py-2.5 text-sm border rounded-xl bg-[var(--surface-soft)] focus:bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)] ${
      errors[f] ? 'border-red-400 bg-red-50' : 'border-[var(--border-light)]'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Full Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={cls('name')} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className={cls('email')} />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={cls('phone')} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Position <span className="text-red-500">*</span></label>
          <select name="position" value={form.position} onChange={handleChange} className={cls('position')}>
            <option value="">Select position…</option>
            {positions.map((p) => <option key={p}>{p}</option>)}
            <option value="General Application">General Application</option>
          </select>
          {errors.position && <p className="text-xs text-red-500 mt-1">{errors.position}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Experience</label>
          <select name="experience" value={form.experience} onChange={handleChange} className={cls('experience')}>
            <option value="">Select…</option>
            <option>Fresher (0–1 year)</option>
            <option>1–2 years</option>
            <option>2–4 years</option>
            <option>4+ years</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Portfolio / LinkedIn</label>
          <input type="url" name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://…" className={cls('portfolio')} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">About You <span className="text-red-500">*</span></label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Describe your experience, skills, and why you want to join DIGITECH…"
          className={`${cls('message')} resize-none`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <button type="submit"
        className="w-full py-3.5 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[var(--text-white)] font-bold rounded-xl transition-colors text-sm shadow-sm"
      >
        Submit Application
      </button>
    </form>
  );
}
