# Dermal Chart And Care

this is the starting (banner) page of my landing page for a company called edvak which is an AI tool for EHR. please extend this landing page by adding the necessary visual for the following sections: 

Section 1: 

What are the current issues?

Dermatology software has three chronic problems.

Edvak has the CURE.

------------------------------------------------------------------------

Cost

Add-On Fees Keep Piling Up

Many EHRs are generic and charge additional fees for features dermatology

practices need.

------------------------------------------------------------------------

Fragmentation

Too Many Tools

Most EHR have limited features and require third party tools to meet your

practice workflow requirements. Edvak has everything in one platform.

----------------------------------------------------------------------------

Shallow AI

AI That Stops at Documentation

Many EHRs limit AI to documentation. Edvak brings AI across the entire

workflow.

-------------------------------------------------------------------------------

Section 2:

Our features

Everything your dermatology practice runs on, all in

one place.

--------------------------------------------

AI-Powered Clinical Documentation

Turn patient conversations into structured clinical notes with AI, capture findings

directly on body maps and document key dermatology details faster with less

manual charting.

--------------------------------------------------------------------

Integrated Point of Sale

Collect insurance copays, deductibles, cosmetic payments, and retail purchases at

the front desk without switching to a separate payment system.

---------------------------------------------------------------------

Inventory Management

Monitor injectables, fillers, and topicals by lot and expiration, with automatic low

stock and reorder alerts.

--------------------------------------------------------------------------

Section 3:

How we are diiferent?

We map your existing data.

Charts, images, pathology history, and billing records are mapped from your

current system before anything moves.

-----------------------------------------------------------------------------

Your team runs both, briefly.

A short parallel period lets staff get comfortable with Edvak while the old system

stays available as a safety net.

-------------------------------------------------------------------------------

You go live, without a gap.

No day where the schedule stops. Patients are seen on Edvak from day one, with

full history already in place.

-------------------------------------------------------------------------------------------

Eyebrow: WHY CUSTOMERS LOVE US

What Edvak does for a dermatology practice.

"Edvak has improved the way we care for patients because we're spending less

time on paperwork and navigating multiple systems."

Olivia Joseph

Physician, Texas Medical Center

Section 4:

Eye brow: FAQ

Headline: Common questions about Edvak EHR

What is a dermatology EHR?

A dermatology EHR is an electronic health record designed to support the clinical

and operational workflows of dermatology practices, including documentation,

clinical images, pathology workflows, prescriptions, scheduling, billing, and

patient engagement.

-------------------------------------------------------------------------------------

How does Edvak use AI for dermatology practices?

Edvak integrates AI across documentation, coding, clinical workflows, document

processing, and practice insights, rather than limiting AI to a standalone

documentation tool.

------------------------------------------------------------------------------------

Does Edvak support both medical and cosmetic dermatology in one chart?

Yes. Inventory is tracked by lot and expiration date, with usage deducted

automatically as it's documented on a patient, and alerts before stock runs low or

expires.

------------------------------------------------------------------------------------------

Section 5:

CTA section:

Ready to run your practice on one platform?

See how Edvak handles medical dermatology, cosmetic services, and everything

in between, in a walkthrough built around your practice.

<Book a demo>

Please make sure that each section looks slightly different so there is a break to the eye and distinction to understand that a new section has come. Maintain the clean glass effect cool toned visual aesthetic. Add relevant premium visuals for each section.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/263867d6-0ca3-42f3-9e51-59c3930b830d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```


## Scroll experience update

The landing route keeps the Edvak palette, supplied photography, product copy, and TanStack/Lovable stack. The update adds a scroll-driven connected-workflow sequence, synchronized desktop feature chapters, inline mobile previews, a sticky section navigator, reading progress, and reduced-motion alternatives. Interface previews use illustrative patient and product data rather than production screenshots.

### Run and verify

Use Node.js 22.12+ (or a newer supported release) and npm:

```sh
npm ci
npm run dev
npx tsc --noEmit
npm test
npm run build
```

The production build prerenders `/` to `.output/public/index.html`; this directory can be served as a static site. The original SSR output also remains available under `.output/server`. `vite.config.ts` permits the internal preview hostname as well as Vite's default localhost access.

The final demo button opens Edvak's contact/demo page at `https://www.edvak.com/contact`; all other demo links lead to that final call to action. No lead collection backend is included.
