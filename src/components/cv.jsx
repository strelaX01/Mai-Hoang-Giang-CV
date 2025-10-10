import React from "react";
import profileData from "../data/profileData";
import { Mail, Phone, MapPin, Facebook, Github, Cake } from "lucide-react";

export default function CV() {
    const data = profileData;
    return (
        <div className="cv-wrapper">

            {/* ===== Header ===== */}
            <header className="cv-header">
                <div className="avatar-wrapper">
                    <img src={data.avatar} alt="avatar" className="avatar" />
                </div>
                <div className="header-info">
                    <h1>{data.name}</h1>
                    <p className="title">{data.title}</p>
                </div>
            </header>

            <div className="cv-body">
                {/* ===== SIDE trái ===== */}
                <aside className="cv-left">
                    <section className="contact">
                        <h3>CONTACT</h3>
                        <ul>
                            <li><Cake size={20} color="#000000" /> {data.dob}</li>
                            <li><Phone size={20} color="#000000" /> {data.phone}</li>
                            <li><Mail size={20} color="#000000" /> {data.email}</li>
                            <li><MapPin size={20} color="#000000" /> {data.location}</li>
                            <li><Facebook size={20} color="#000000" /> <a href={data.facebook}>{data.facebook}</a></li>
                            <li><Github size={20} color="#000000" /> <a href={data.github}>{data.github}</a></li>
                        </ul>
                    </section>

                    <section className="skills">
                        <h3>SKILLS</h3>
                        <p className="sub">Technical Skills</p>
                        <ul>{data.skills.technical.map((s, i) => <li key={i}>{s}</li>)}</ul>
                        <p className="sub">Soft Skills</p>
                        <ul>{data.skills.soft.map((s, i) => <li key={i}>{s}</li>)}</ul>
                    </section>

                    <section className="certificates">
                        <h3>CERTIFICATES</h3>
                        <ul>{data.certificates.map((c, i) => <li key={i}>{c}</li>)}</ul>
                    </section>

                    <section className="hobbies">
                        <h3>HOBBIES</h3>
                        <ul>{data.hobbies.map((h, i) => <li key={i}>{h}</li>)}</ul>
                    </section>
                </aside>

                {/* ===== SIDE phải ===== */}
                <main className="cv-right">
                    <section className="profile">
                        <div className="sec-title">PROFILE</div>
                        <p>{data.profile}</p>
                    </section>

                    <section className="experience">
                        <div className="sec-title">WORK EXPERIENCE</div>
                        {data.experience.map((exp, i) => (
                            <div key={i} className="timeline-item">
                                <div className="exp-head">
                                    <h4>{exp.role}</h4>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <p className="company">{exp.company}</p>
                                <ul>{exp.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                            </div>
                        ))}
                    </section>

                    <section className="project">
                        <div className="sec-title">PROJECT</div>
                        <div className="timeline-item">
                            <div className="exp-head">
                                <h4>{data.project.name}</h4>
                                <span className="period">{data.project.period}</span>
                            </div>
                            <ul>{data.project.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
                        </div>
                    </section>

                    <section className="education">
                        <div className="sec-title"> EDUCATION</div>
                        <div className="timeline-item">
                            <div className="timeline-edu">
                                <h4>{data.education.school}</h4>
                                <span className="period">{data.education.period}</span>
                            </div>
                            <p>{data.education.degree}</p>
                            <p><strong>GPA:</strong> {data.education.gpa}</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
