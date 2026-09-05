'use client';

import { useState } from 'react';

const SERVICES = [
  'Web Development', 'App Development', 'E-Commerce', 'CRM Development',
  'UI/UX Design', 'Digital Marketing', 'SEO Services', 'Shopify Development', 'Other',
];
const BUDGETS = [
  'Under ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹5,00,000', 'Above ₹5,00,000', 'Not sure yet',
];

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', service:'', budget:'', message:'' });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please describe your project';
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
        <h3 className="text-xl font-black text-[var(--text-primary)] mb-2">Message Received!</h3>
        <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
          Thanks for reaching out to DIGITECH. We'll get back to you within 2 business hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',company:'',service:'',budget:'',message:'' }); }}
          className="px-6 py-2.5 bg-[var(--primary)] text-[var(--text-white)] text-sm font-semibold rounded-xl hover:bg-[var(--primary-dark)] transition-colors"
        >
          Send Another Message
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
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Full Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={cls('name')} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={cls('email')} />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={cls('phone')} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Company / Website</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={cls('company')} />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Service Required</label>
          <select name="service" value={form.service} onChange={handleChange} className={cls('service')}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Budget Range</label>
          <select name="budget" value={form.budget} onChange={handleChange} className={cls('budget')}>
            <option value="">Select range…</option>
            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">Project Details <span className="text-red-500">*</span></label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your project — goals, timeline, requirements…"
          className={`${cls('message')} resize-none`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <button type="submit"
        className="w-full py-3.5 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[var(--text-white)] font-bold rounded-xl transition-colors text-sm shadow-sm"
      >
        Send Message
      </button>
      <p className="text-center text-xs text-[var(--text-muted)]">
        ⚡ We respond within 2 business hours
      </p>
    </form>
  );
}
