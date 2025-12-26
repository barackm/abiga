'use client';

import React, { useState } from "react";
import { submitTestimonial } from "@/actions/testimonies";
import AOS from "aos";

const MAX_TEXT_LENGTH = 500;
const MAX_AUTHOR_LENGTH = 50;
const MAX_RELATION_LENGTH = 30;

interface TestimonialFormProps {
  onSuccess?: () => void;
}

export default function TestimonialForm({ onSuccess }: TestimonialFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    author: "",
    relation: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation
    if (!formData.text.trim()) {
      setError("Le témoignage est requis.");
      return;
    }
    if (formData.text.trim().length < 20) {
      setError("Le témoignage doit contenir au moins 20 caractères.");
      return;
    }
    if (!formData.author.trim()) {
      setError("Le nom est requis.");
      return;
    }
    if (!formData.relation.trim()) {
      setError("La relation est requise.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitTestimonial(formData);
      
      if (result.success) {
        setSuccess(true);
        setFormData({ text: "", author: "", relation: "" });
        setTimeout(() => {
          setSuccess(false);
          setIsOpen(false);
          if (onSuccess) {
            onSuccess();
          }
        }, 2000);
      } else {
        setError(result.error || "Une erreur est survenue.");
      }
    } catch (err) {
      setError("Une erreur est survenue lors de la soumission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const remainingChars = MAX_TEXT_LENGTH - formData.text.length;
  const isNearLimit = remainingChars < 50;

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#93C7F3] hover:bg-[#7ab3e0] text-white rounded-full p-4 shadow-2xl hover:shadow-[#93C7F3]/50 transition-all duration-300 hover:scale-110 group"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <svg
          className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span className="sr-only">Ajouter un témoignage</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => !isSubmitting && setIsOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border-2 border-[#93C7F3]/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Partager un <span className="text-[#93C7F3]">Témoignage</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  disabled={isSubmitting}
                  className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Témoignage soumis avec succès!
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                  <p>{error}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Testimony Text */}
                <div>
                  <label htmlFor="text" className="block text-white font-semibold mb-2">
                    Votre Témoignage <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="text"
                    value={formData.text}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_TEXT_LENGTH) {
                        setFormData({ ...formData, text: e.target.value });
                        setError("");
                      }
                    }}
                    rows={6}
                    className="w-full bg-white/10 backdrop-blur-sm border-2 border-[#93C7F3]/30 rounded-lg p-4 text-white placeholder-gray-400 focus:border-[#93C7F3] focus:outline-none focus:ring-2 focus:ring-[#93C7F3]/50 transition-all duration-300 resize-none"
                    placeholder="Partagez vos souvenirs et votre amour pour Abigaël..."
                    required
                    disabled={isSubmitting}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-400">
                      Minimum 20 caractères requis
                    </p>
                    <p
                      className={`text-xs font-semibold ${
                        isNearLimit
                          ? remainingChars < 0
                            ? "text-red-400"
                            : "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    >
                      {remainingChars} caractères restants
                    </p>
                  </div>
                </div>

                {/* Author Name */}
                <div>
                  <label htmlFor="author" className="block text-white font-semibold mb-2">
                    Votre Nom <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="author"
                    value={formData.author}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_AUTHOR_LENGTH) {
                        setFormData({ ...formData, author: e.target.value });
                        setError("");
                      }
                    }}
                    className="w-full bg-white/10 backdrop-blur-sm border-2 border-[#93C7F3]/30 rounded-lg p-4 text-white placeholder-gray-400 focus:border-[#93C7F3] focus:outline-none focus:ring-2 focus:ring-[#93C7F3]/50 transition-all duration-300"
                    placeholder="Votre nom complet"
                    required
                    maxLength={MAX_AUTHOR_LENGTH}
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Maximum {MAX_AUTHOR_LENGTH} caractères
                  </p>
                </div>

                {/* Relation */}
                <div>
                  <label htmlFor="relation" className="block text-white font-semibold mb-2">
                    Votre Relation <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="relation"
                    value={formData.relation}
                    onChange={(e) => {
                      if (e.target.value.length <= MAX_RELATION_LENGTH) {
                        setFormData({ ...formData, relation: e.target.value });
                        setError("");
                      }
                    }}
                    className="w-full bg-white/10 backdrop-blur-sm border-2 border-[#93C7F3]/30 rounded-lg p-4 text-white placeholder-gray-400 focus:border-[#93C7F3] focus:outline-none focus:ring-2 focus:ring-[#93C7F3]/50 transition-all duration-300"
                    placeholder="Ex: Ami(e), Famille, Cousin(e), etc."
                    required
                    maxLength={MAX_RELATION_LENGTH}
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Maximum {MAX_RELATION_LENGTH} caractères
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border-2 border-[#93C7F3]/30 hover:border-[#93C7F3]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.text.trim().length < 20}
                    className="flex-1 px-6 py-3 bg-[#93C7F3] hover:bg-[#7ab3e0] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      "Soumettre"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

