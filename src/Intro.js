import React, { useState } from "react";

export default function Intro() {
  function StartButton() {
    return (
      <div className="pb-6 inline-block">
        <a href="/quiz">
          <button className="bg-white p-6 rounded-sm font-mono">
            Start the Quiz
          </button>
        </a>
      </div>
    );
  }
  return (
    <>
      <div className="bg-stone-300 p-6 w-max mx-auto rounded-xl shadow-lg items-center space-x-4 flex flex-col space-y-4 m-6">
        <div id="intro-container" className="container mx-auto space-y-4 p-10">
          <h1 className="text-3xl font-bold underline font-serif">
            Demystifying Your Rights
          </h1>
          <p className="block font-sans p-4">
            {" "}
            As the{" "}
            <a href="https://bills.parliament.uk/bills/2839">
              Police, Crime, Sentencing and Courts Bill
            </a>{" "}
            makes it's way through Parliament it has become more important than
            ever for the public to understand their rights in regard to both
            protests and general interaction with police. The police as an
            instition is not innocent. On 3rd March 2021{" "}
            <a href="https://www.theguardian.com/uk-news/2021/sep/30/sarah-everard-murder-wayne-couzens-whole-life-sentence">
              Sarah Everard
            </a>{" "}
            was murdered by a Wayne Couzens, a police officer who pretended to
            arrest her for breaking COVID 19 lockdown regulations. In October
            2021{" "}
            <a href="https://www.bbc.co.uk/news/uk-england-nottinghamshire-60118874">
              Koshka Duff
            </a>
            received compensation and an apology for her treatment in police
            custody during her arrest in 2013 where an officer was recorded
            saying "treat her like a terrorist". On 10th February 2022 former
            Metropolitan Police Commisioner{" "}
            <a href="https://www.bbc.co.uk/news/uk-england-60340525">
              Cressida Dick
            </a>{" "}
            stepped down amid intense scrutiny into her response to the
            revalations that COVID lockdown regulations were{" "}
            <a href="https://www.theguardian.com/politics/2022/jan/24/a-full-list-of-alleged-government-covid-rule-busting-parties">
              broken repeatedly and intentionally
            </a>{" "}
            by members of the government including the Prime Minister, as well
            as accusations of misogyny and racism within the force. <br />
            <br />
            The takeaway is that the police cannot be trusted to have our best
            interests in mind, and the responsibility is on ourselves as
            individuals to educate ourselves on what the police force are
            allowed to do, and when they are crossing the line. This is not
            intended to be a resource in a real world situation, as when being
            stopped by the police access to your phone or the internet will
            almost certainly prohibited. This is an educational tool and
            learning resource only so that you may familliarise yourself with
            police procedure, and know when they are getting it wrong.
          </p>
        </div>
        <StartButton />
      </div>
    </>
  );
}
