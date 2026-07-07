import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactView() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaNum1, setCaptchaNum1] = useState(1);
  const [captchaNum2, setCaptchaNum2] = useState(5);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 9) + 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const expected = captchaNum1 + captchaNum2;
    if (parseInt(captchaAnswer) !== expected) {
      alert(`Security check incorrect. Please calculate: ${captchaNum1} + ${captchaNum2}`);
      return;
    }
    setIsSent(true);
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-label-caps text-primary uppercase tracking-[0.25em] block">
          Get In Touch
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          Contact Us
        </h1>
      </motion.div>

      {/* Main Container */}
      <motion.div
        className="container-frame p-6 md:p-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Location & Info */}
          <div className="lg:col-span-6 space-y-8">
            {/* Address Card */}
            <div className="bg-surface-onyx p-6 rounded-xl border border-border-subtle space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-label-caps text-xs uppercase tracking-widest text-muted-stone mb-1">
                    Come Visit Us
                  </h3>
                  <p className="text-text-warm-white font-body-md">401 Irving Street</p>
                  <p className="text-muted-stone font-body-md">San Francisco, CA 94122</p>
                </div>
              </div>

              {/* Map */}
              <div className="relative aspect-[16/9] w-full rounded-lg bg-surface-container-lowest border border-border-subtle overflow-hidden flex items-center justify-center font-label-caps text-xs text-muted-stone uppercase tracking-wider p-4">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-text-warm-white"></div>
                  <div className="absolute top-2/4 left-0 right-0 h-px bg-text-warm-white"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-px bg-text-warm-white"></div>
                  <div className="absolute left-1/4 top-0 bottom-0 w-px bg-text-warm-white"></div>
                  <div className="absolute left-2/4 top-0 bottom-0 w-px bg-text-warm-white"></div>
                  <div className="absolute left-3/4 top-0 bottom-0 w-px bg-text-warm-white"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="font-display-lg text-lg text-text-warm-white tracking-widest uppercase drop-shadow-md">
                    Savor Cafe &amp; Bistro
                  </span>
                  <span className="font-body-md text-xs text-primary mt-1">
                    Irving st / 5th ave
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=401+Irving+Street,+San+Francisco,+CA+94122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-surface-onyx border border-border-subtle text-primary font-label-caps text-xs uppercase px-2.5 py-1.5 rounded-md hover:bg-primary hover:text-surface-onyx transition-all cursor-pointer"
                >
                  Open in Maps &nearr;
                </a>
              </div>
            </div>

            {/* Hours & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-border-subtle/50">
              <div className="space-y-4">
                <h4 className="font-label-caps text-xs uppercase tracking-widest text-primary">
                  Hours of Service
                </h4>
                <div className="space-y-2 font-body-md text-text-warm-white/80 text-sm">
                  <div className="flex justify-between pb-1 border-b border-border-subtle">
                    <span>Mon</span>
                    <span className="text-error uppercase font-bold">Closed</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-border-subtle">
                    <span>Tue - Fri</span>
                    <span>11:30 - 2:30 / 5:00 - 9:00</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-border-subtle">
                    <span>Sat</span>
                    <span>10:00 - 10:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sun</span>
                    <span>10:00 - 8:00</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-label-caps text-xs uppercase tracking-widest text-primary">
                  Direct Contact
                </h4>
                <div className="space-y-3">
                  <a
                    href="tel:4157026048"
                    className="font-display-lg text-2xl text-primary hover:text-primary-container transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    415.702.6048
                  </a>
                  <p className="text-muted-stone text-sm font-body-md leading-relaxed">
                    For parties larger than 8, please call us directly for availability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-2">
                    <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-wide">
                      Send a Message
                    </h2>
                    <p className="text-muted-stone font-body-md text-sm">
                      We'd love to hear from you. Fill out the form below.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-label-caps text-xs uppercase tracking-widest text-muted-stone">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-surface-onyx border border-border-subtle text-text-warm-white rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md placeholder:text-muted-stone/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-label-caps text-xs uppercase tracking-widest text-muted-stone">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-onyx border border-border-subtle text-text-warm-white rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md placeholder:text-muted-stone/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-label-caps text-xs uppercase tracking-widest text-muted-stone">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how we can help..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-surface-onyx border border-border-subtle text-text-warm-white rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md placeholder:text-muted-stone/50 resize-none"
                    ></textarea>
                  </div>

                  {/* Captcha */}
                  <div className="space-y-2">
                    <label className="block font-label-caps text-xs uppercase tracking-widest text-muted-stone flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      Security Check
                    </label>
                    <div className="flex gap-4 items-center">
                      <div className="bg-surface-container border border-border-subtle px-4 py-3 rounded-lg font-body-md text-primary select-none min-w-[120px] text-center">
                        {captchaNum1} + {captchaNum2} =
                      </div>
                      <input
                        type="number"
                        required
                        placeholder="?"
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        className="w-24 bg-surface-onyx border border-border-subtle text-text-warm-white rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-center placeholder:text-muted-stone/50"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary-container text-surface-onyx font-label-caps uppercase tracking-[0.2em] py-4 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  className="bg-surface-onyx p-8 rounded-xl border border-border-subtle text-center space-y-6 flex flex-col items-center justify-center h-full min-h-[350px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                  <div className="space-y-2">
                    <h3 className="font-headline-md text-headline-md text-text-warm-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-text-warm-white/80 max-w-sm mx-auto font-body-md">
                      Thank you for contacting Savor, <span className="text-primary">{fullName}</span>. We have received your message and will get back to you at <span className="text-primary">{email}</span> within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFullName('');
                      setEmail('');
                      setMessage('');
                      setCaptchaAnswer('');
                      generateCaptcha();
                    }}
                    className="border border-primary/30 text-primary hover:bg-primary/10 px-6 py-2.5 rounded-lg font-label-caps text-xs uppercase tracking-widest transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
