"use client";

import { useState } from "react";

const CONVERSATION_OPTIONS = [
  "Revenue Opportunity Assessment",
  "Technical / Security Review",
  "Strategic / Advisory Conversation"
];

const CHALLENGE_OPTIONS = [
  "Denial intelligence and recovery",
  "Underpayment / underbilling detection",
  "Payer visibility and contract performance",
  "Prior auth and workflow leakage",
  "Executive reporting and operating dashboards",
  "Other"
];

const CLAIM_VOLUME_OPTIONS = [
  "< 500 claims/month",
  "500 – 2,000 claims/month",
  "2,000 – 10,000 claims/month",
  "10,000 – 50,000 claims/month",
  "> 50,000 claims/month"
];

const ORG_TYPE_OPTIONS = [
  "Clinic",
  "Specialty Practice",
  "Multi-location Practice",
  "Small Health System",
  "Other"
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    organizationType: "",
    role: "",
    interestType: "",
    challenge: "",
    claimVolume: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        ...form,
        message: `${form.interestType ? `Conversation type: ${form.interestType}\n\n` : ""}${form.message}`
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card" style={{ textAlign: "center", padding: "2.5rem 1.5rem" }}>
        <p style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>✓</p>
        <h3 style={{ color: "#0b1f4d" }}>We received your inquiry.</h3>
        <p>A member of our team will follow up within 1 business day with next-step options.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div><label style={labelStyle} htmlFor="firstName">First Name *</label><input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} style={inputStyle} placeholder="Jane" /></div>
        <div><label style={labelStyle} htmlFor="lastName">Last Name *</label><input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} style={inputStyle} placeholder="Smith" /></div>
      </div>

      <div><label style={labelStyle} htmlFor="email">Work Email *</label><input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="jane@clinic.org" /></div>
      <div><label style={labelStyle} htmlFor="organization">Organization *</label><input id="organization" name="organization" type="text" required value={form.organization} onChange={handleChange} style={inputStyle} placeholder="Regional Medical Center" /></div>
      <div><label style={labelStyle} htmlFor="role">Your Role</label><input id="role" name="role" type="text" value={form.role} onChange={handleChange} style={inputStyle} placeholder="CFO, RCM Director, Practice Administrator..." /></div>

      <div>
        <label style={labelStyle} htmlFor="interestType">Conversation Type</label>
        <select id="interestType" name="interestType" value={form.interestType} onChange={handleChange} style={inputStyle}>
          <option value="">Select preferred conversation path</option>
          {CONVERSATION_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>

      <div><label style={labelStyle} htmlFor="organizationType">Organization Type</label><select id="organizationType" name="organizationType" value={form.organizationType} onChange={handleChange} style={inputStyle}><option value="">Select organization type</option>{ORG_TYPE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}</select></div>
      <div><label style={labelStyle} htmlFor="challenge">Primary Challenge</label><select id="challenge" name="challenge" value={form.challenge} onChange={handleChange} style={inputStyle}><option value="">Select your highest-priority issue</option>{CHALLENGE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}</select></div>
      <div><label style={labelStyle} htmlFor="claimVolume">Monthly Claim Volume</label><select id="claimVolume" name="claimVolume" value={form.claimVolume} onChange={handleChange} style={inputStyle}><option value="">Select claim volume</option>{CLAIM_VOLUME_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}</select></div>

      <div><label style={labelStyle} htmlFor="message">Context for your team</label><textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical" }} placeholder="Any context on denials, underpayments, data readiness, stakeholders, or timeline..." /></div>

      {status === "error" && <p style={{ color: "#dc2626", fontSize: ".9rem" }}>{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"} className="btn" style={{ alignSelf: "flex-start", opacity: status === "loading" ? 0.6 : 1, cursor: status === "loading" ? "wait" : "pointer", border: "none" }}>
        {status === "loading" ? "Sending…" : "Submit Intake"}
      </button>

      <p style={{ fontSize: ".82rem", color: "#94a3b8" }}>Response within 1 business day. NDA and security review process available.</p>
    </form>
  );
}

const labelStyle = {
  display: "block",
  fontWeight: 600,
  fontSize: ".9rem",
  marginBottom: ".3rem",
  color: "#0b1f4d"
};

const inputStyle = {
  width: "100%",
  padding: ".65rem .85rem",
  border: "1px solid #cbd5e1",
  borderRadius: ".5rem",
  fontSize: "1rem",
  fontFamily: "inherit",
  color: "#334155",
  background: "#fff",
  outline: "none"
};
