# MD Shihabul Islam Shovo — Master Profile

> Source-of-truth for all CV, resume, and portfolio content. Update this file first when new
> experience, publications, projects, or courses happen — then regenerate the CV variants from it.

## Contact
- **Name:** MD Shihabul Islam Shovo
- **Email:** shihabul900@gmail.com
- **Phone:** +880 176 732 3258
- **GitHub:** https://github.com/Shihabul-Shuvo/
- **LinkedIn:** https://www.linkedin.com/in/shihabul-islam-shovo/
- **Portfolio:** https://shihabul-shuvo.github.io/
- **Location:** Dhaka, Bangladesh

## Timeline (Chronological)

| Date | Event | Category |
|---|---|---|
| 2014 – 2015 | SSC, Cantonment Public School & College Saidpur — GPA 5.00/5.00 | Education |
| 2016 – 2018 | HSC, Cantonment Public School & College Saidpur — GPA 5.00/5.00 | Education |
| 2020 – 2024 | B.Sc. in Computer Science and Engineering, AUST — CGPA 3.078/4.00 | Education |
| Fall 2021 | Intra AUST Programming Contest — participant | Competitive Programming |
| 2021 – 2023 | Campus Ambassador, GUVI Geek Networks (IITM Research Park) | Extracurricular |
| Jan 2025 – Present | Web & Automation Engineer, Cleaning Connected (Remote, Part-time) | Professional Experience |
| Jul 2025 – Oct 2025 | Industrial Robot Operation and Troubleshooting, BITAC Dhaka | Course |
| Oct 2025 – Ongoing | Full Stack Web Development with Python, Django & React (course) | Course |
| 2026 – Present | Lead Researcher, NIMISHES Lab | Research Experience |
| May 2026 – Ongoing | Servercamp, Astha IT (backend development, C#/ASP.NET/SQL) | Course |
| Jun 2026 – Aug 2026 | Research Intern, ELITE Research Lab LLC | Research Experience |
| Aug 2026 – Present | Junior Research Assistant, ELITE Research Lab LLC (promoted from Research Intern) | Research Experience |
| Sept 2026 (target) | LCM-UNet journal manuscript — target submission | Publication |
| 4–5 Sept 2026 | SleepEffFormer and WaveFoG presented at 5th IEEE BECITHCON 2026, Dhaka | Publication |
| 2026 | DR-LiteNet accepted at 1st IEEE iCONEECT 2026 | Publication |
| 2026 (under review) | AWEF-Net and PDGuard submitted to 29th IEEE ICCIT 2026 | Publication |
| WACV 2027 (target) | CoMAF-Polyp — target: WACV 2027 Workshop (CVF) | Publication |

*Note: most entries only have month/year precision as given on the CVs and LinkedIn; exact days are not tracked except where stated (e.g. Servercamp start date, BECITHCON conference dates).*

## Education
- **B.Sc. in Computer Science and Engineering** — Ahsanullah University of Science and Technology (AUST), Dhaka, Bangladesh. 2020 – 2024. CGPA: 3.078 / 4.00.
- **Higher Secondary Certificate (HSC)** — Cantonment Public School & College Saidpur, Rangpur, Bangladesh. 2016 – 2018. GPA: 5.00 / 5.00.
- **Secondary School Certificate (SSC)** — Cantonment Public School & College Saidpur, Rangpur, Bangladesh. 2014 – 2015. GPA: 5.00 / 5.00.

## Research Experience

### ELITE Research Lab LLC — Queens, NY, USA (Remote) · Part-time
- **Junior Research Assistant** — Aug 2026 – Present (2 mos as of Sep 2026)
- **Research Intern** — Jun 2026 – Present / promoted Aug 2026 (4 mos total tenure)
- **Project: LCM-UNet — Lightweight Skin Lesion Segmentation using a Mamba-based U-Net**
  - Ultra-lightweight (~34K parameters, 0.06 GFLOPs) skin lesion segmentation network built on a Mamba-based state-space U-Net backbone, designed to detect melanoma-related lesion boundaries in dermoscopic images for deployment on low-cost, point-of-care hardware.
  - Main contribution: the **Residual Dilated Local Adapter (RDLA)**, a zero-initialized dilated convolution module that adds extra optimization capacity during training but is exactly fused back into the original kernel via structural reparameterization before inference, so deployment cost stays unchanged.
  - Validated the approach with multi-seed statistical testing on ISIC 2017, ISIC 2018, and external PH2 datasets, showing consistent boundary-quality improvements over the baseline (image-level Wilcoxon significant at p < 1e-4).
  - Promoted from Research Intern to Junior Research Assistant in recognition of research contributions.

### NIMISHES Lab (Nishi Medical Imaging & Intelligent Health Engineering Systems) — Lead Researcher, 2026 – Present
- Independent research lab (co-founded/led by collaborator Nishi Kanta Paul) building explainable, deployment-efficient AI for clinical use.
- Contributed to 6 peer-reviewed manuscripts spanning medical imaging (dermatology, ophthalmology, radiology) and wearable biosignal analysis (EEG, IMU): SleepEffFormer, WaveFoG, DR-LiteNet, AWEF-Net, PDGuard, CoMAF-Polyp.
- Contributions: model design, cross-validation, statistical significance testing, Grad-CAM-based explainability analysis — consistently achieving state-of-the-art parameter efficiency versus standard backbones (ResNet50, DenseNet201, etc.).

## Publications

### Accepted (3) — peer-reviewed, accepted for presentation at IEEE conferences

**[C1] SleepEffFormer: Efficient CNN-Transformer with Transition-Aware Smoothing for Single-Channel EEG Sleep Stage Classification**
Authors: Nishi Kanta Paul, **Md Shihabul Islam Shovo**, Israt Jerin Esha, Adrita Rahman
Venue: 5th IEEE Int. Conf. on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON 2026), Dhaka, Bangladesh, 4–5 September 2026.
Read PDF: https://nimishes-lab.vercel.app/papers/SleepEffFormer.pdf
GitHub source: https://github.com/Nishi-Kanta-Paul/SleepStage
Summary: A lightweight CNN-Transformer for automated sleep staging from a single EEG channel, paired with a non-parametric Transition-Aware Smoothing (TAS) layer that suppresses physiologically implausible stage transitions.
Key results:
- 83.9% accuracy, 78.9% macro-F1, Cohen's kappa 0.765 on Sleep-EDF Expanded (78 all-night recordings, subject-wise split)
- Matches AttnSleep with 3–5x fewer parameters (~367K)
- Transformer encoder adds +6.6pp macro-F1; TAS adds +1.8pp with zero trainable parameters
- Attention maps recover physiologically meaningful sleep-stage EEG signatures
Tags: Sleep staging, single-channel EEG, Transformer, 1D CNN, explainability, lightweight DL.

**[C2] WaveFoG: Wavelet-Gated Transformer for Parkinson's Freezing of Gait Detection Using Wearable Accelerometer Signals** — *(First author)*
Authors: **Md Shihabul Islam Shovo**, Nishi Kanta Paul, Adrita Rahman, Israt Jerin Esha
Venue: 5th IEEE BECITHCON 2026, Dhaka, Bangladesh, 4–5 September 2026.
Read PDF: https://nimishes-lab.vercel.app/papers/WaveFoG.pdf
GitHub source: https://github.com/Shihabul-Shuvo/WaveFoG
Summary: A dual-branch CNN-Transformer that fuses discrete wavelet sub-band descriptors through a sigmoid gating layer to detect freezing-of-gait episodes from wrist-worn accelerometers under severe class imbalance.
Key results:
- F1 0.875 ± 0.017 and AUPRC 0.833 ± 0.020 on the Kaggle TLVMC FoG dataset
- Subject-independent grouped ten-fold cross-validation
- Up to +5.4pp F1 over 1D CNN, Bi-LSTM, and vanilla Transformer baselines
- Temporal saliency maps align with reported FoG onset characteristics
Tags: Freezing of gait, Parkinson's disease, wearable IMU, discrete wavelet transform, focal loss.

**[C3] DR-LiteNet: A Lightweight Explainable Hybrid CNN Framework for Imbalanced Diabetic Retinopathy Grading via Adaptive SMOTE Fusion**
Authors: NIMISHES Lab
Venue: 1st Int. Conf. on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT 2026).
Read PDF: https://nimishes-lab.vercel.app/papers/DR-LiteNet.pdf
Summary: A dual-branch network that fuses 1,280-d EfficientNetB0 features with a 52-d handcrafted lesion descriptor (vessel density, exudate intensity, texture entropy, HSV histograms), then applies ADASYN in feature space to correct five-grade class imbalance without touching the images.
Key results:
- 88.77% ± 0.61 accuracy, QWK 0.884 ± 0.010, macro-F1 0.792 ± 0.008 on APTOS 2019
- Only 4.69M parameters — beats ResNet50 (23.5M) by ΔQWK = 0.022
- Two-phase training: balanced head warm-up, then end-to-end fine-tuning
- Grad-CAM saliency maps for post-hoc clinical explainability
Tags: Diabetic retinopathy, class imbalance, ADASYN, EfficientNet, Grad-CAM, explainable AI.

### Under Review (2) — submitted to the 29th IEEE International Conference on Computer and Information Technology (ICCIT 2026)

**[U1] AWEF-Net: An Attention-Weighted Ensemble Fusion Framework for Multi-Class Pulmonary Disease Classification from Chest Radiographs**
Authors: NIMISHES Lab
Read PDF: https://nimishes-lab.vercel.app/papers/AWEF-Net.pdf
Summary: Replaces fixed late-fusion rules with a lightweight two-layer MLP attention gate that produces input-adaptive weights for ResNet50, InceptionV3, and DenseNet201, resolving the inter-model feature conflict where one backbone dominates the fused decision.
Key results:
- 96.3% macro-F1 and 97.1% COVID-19 recall on the COVID-19 Radiography Database (21,165 images, 4 classes)
- +1.4pp macro-F1 and +1.7pp COVID recall over the strongest fixed-fusion baseline
- Gating adds under 0.6% of total model parameters
- Better cross-dataset generalisation on an external CXR corpus
Tags: Chest radiography, ensemble learning, attention, feature fusion, COVID-19.

**[U2] PDGuard: A CNN-BiLSTM Attention Network for Wearable IMU-Based Parkinson's Disease Detection**
Authors: NIMISHES Lab
Read PDF: https://nimishes-lab.vercel.app/papers/PDGuard.pdf
Summary: A compact 1D-convolution, bidirectional LSTM, and multi-head self-attention network that classifies raw wrist-worn accelerometer and gyroscope streams, targeting frequent monitoring outside the clinic.
Key results:
- 88.34% ± 1.01 accuracy, 83.79% balanced accuracy, pooled held-out ROC-AUC 0.918 on the PADS cohort (469 participants)
- 77.34% accuracy on the harder PD vs. differential-diagnosis task
- Strictly subject-disjoint five-fold cross-validation
- 1.24M parameters, 18.3 ms per 4.8s window on CPU — smartphone-class deployment
Tags: Parkinson's disease, IMU, CNN, Bi-LSTM, attention, wearable health.

### In Preparation (2) — targeting submission in late 2026

**[P1] LCM-UNet: A Reparameterizable Local-Compensated Mamba U-Net for Skin Lesion Segmentation** — *(First author)*
Authors: **Md Shihabul Islam Shovo**, Nishi Kanta Paul, Kishor Morol
Target: Journal manuscript, target submission September 2026.
Read PDF: https://nimishes-lab.vercel.app/papers/LCM-UNet.pdf
Summary: Strengthens the local pathway of an ultra-compact state-space segmentation network with a zero-initialized dilated depthwise adapter (RDLA) that merges exactly into a single kernel after training — more capacity during learning, an unchanged graph at inference.
Key results:
- 34,180 parameters and 0.05974 GFLOPs after reparameterization — 4 parameters more than the reference, identical cost
- +0.48 / +0.37pp IoU and +0.29 / +0.22pp DSC over a retrained reference backbone on ISIC 2017 and ISIC 2018
- External PH2 transfer: 86.37% ± 0.29 IoU vs. 85.91% ± 0.29 for the reference
- Fused and unfused models emit identical masks to numerical tolerance; image-level Wilcoxon significant at p < 1e-4
Tags: Skin lesion segmentation, state-space model, Mamba, structural reparameterization, U-Net.

**[P2] CoMAF-Polyp: Calibrated Reliability-Aware Fusion of Specialist and Foundation Pseudo-Labels for Semi-Supervised Polyp Segmentation**
Authors: Nishi Kanta Paul, **Md Shihabul Islam Shovo**, Camila Gonzalez (Medical University of Vienna)
Target: WACV 2027 Workshop (Computer Vision Foundation).
Summary: A calibration-aware adaptive fusion framework ("Consensus of Multi-source Adaptive Fusion") for pseudo-label generation in semi-supervised polyp segmentation from colonoscopy. Fuses candidates from a domain-adapted EMA specialist and a frozen SAM-Med2D foundation model, gated by a 5-descriptor reliability score (agreement, entropy, boundary confidence, shape plausibility, prediction stability) via a calibrated 1.4K-parameter MLP gate.
Key results:
- 88.46% Dice on Kvasir-SEG with 10% labels; fused pseudo-labels recover 98.6% of a per-image oracle
- +2.44pp average Dice over the best baseline across four unseen datasets (ClinicDB, ColonDB, ETIS, CVC-300) under domain shift, degrading least on the most severely shifted set
- Calibration reduces expected calibration error (ECE) from 0.147 to 0.038
- Ablation shows the calibrated gate alone contributes +1.95 Dice — larger than adding the second knowledge source itself
- Calibration remains effective with as few as 20 labeled frames for periodic re-anchoring
- All added machinery is training-time only; deployed model is just the student segmentation network (38.2 FPS)
Tags: Semi-supervised segmentation, polyp segmentation, pseudo-labeling, calibration, foundation models (SAM), mean-teacher.

## Professional Experience

### Web & Automation Engineer — Cleaning Connected (California, USA, Remote) · Part-time
Jan 2025 – Present (1 yr 9 mos as of Sep 2026)
- Designed and developed digital solutions to support business operations, including website development, lead management automation, and workflow optimization.
- Responsible for maintaining web platforms, integrating business tools, and resolving technical issues to improve operational efficiency.

## Technical Skills
- **AI/ML & Research:** PyTorch, TensorFlow, Keras, Scikit-learn, Transformers, Mamba / state-space models, Grad-CAM & explainable AI, multi-seed statistical validation (Wilcoxon, ANOVA), structural reparameterization
- **Languages:** Python, JavaScript, C#, Java, C/C++
- **Frontend:** React, Tailwind CSS, Bootstrap, TypeScript, HTML, CSS
- **Backend:** Django, Django REST Framework, ASP.NET MVC, Flask, PHP
- **Databases:** SQLite, MySQL, PostgreSQL, Microsoft SQL Server
- **Tools & Auth:** Git, GitHub, Postman, Selenium WebDriver, JWT Authentication
- **Concepts:** REST APIs, MVC Architecture, Data Structures & Algorithms, SDLC, Agile Methodology, RBAC

## Software Development Projects

### Hospital Management System — Full-Stack Web App
Stack: Django REST Framework, React (Vite), JWT, SQLite/PostgreSQL
GitHub: https://github.com/Shihabul-Shuvo/Hospital_Management_System
Built as part of the Ostad course.
- Designed and built a role-based hospital management platform (admin, doctor, patient, receptionist) with a Django REST Framework API and a React (Vite) SPA, modeling 9 relational entities including patients, doctors, appointments, prescriptions, and billing.
- Implemented JWT authentication with automatic silent token refresh on the frontend, including request deduplication to prevent redundant concurrent refresh calls.
- Enforced fine-grained role-based access control with dual-layer authorization — queryset-level scoping plus object-level permission checks — ensuring users can only access their own records.
- Built a consistent API error-handling layer (custom DRF exception handler) and auto-generated OpenAPI/Swagger documentation via drf-spectacular.
- Developed reusable React data-fetching hooks, protected/role-gated routing, and a centralized axios client with request/response interceptors.
- Note: a "live demo" link (https://eshopget.netlify.app/) was provided alongside this project but appears to belong to the Exclusive Shop project instead — verify and correct before reuse.

### MRI Tumor Detection System
Stack: Python, Flask, TensorFlow, Keras, VGG16
GitHub: https://github.com/Shihabul-Shuvo/MRI_Brain_Tumer_Detection
- Developed a web-based AI system to classify MRI brain scans into four tumor categories.
- Implemented confidence scoring and automated PDF medical report generation.
- Optimized a CNN-based model for medical image classification.

### Interactive Teaching Platform — Full Stack
Stack: Django, Django REST Framework, Tailwind CSS, JavaScript, SQLite, Python
GitHub: https://github.com/Shihabul-Shuvo/Interactive-Teaching-Platform
- Built an interactive learning platform with clickable terms, multimedia popups, and responsive UI.
- Developed REST APIs for dynamic content loading and smooth frontend-backend integration.
- Implemented multilingual slug logic with Bengali fallback for SEO-friendly URLs.

### EasyHome — House Rentals Service
Stack: ASP.NET MVC, C#, Entity Framework, MSSQL, Bootstrap
GitHub: https://github.com/Shihabul-Shuvo/EasyHome
- Built a complete house rental management system for landlords and tenants.
- Implemented user registration, login, profile management, and role-based access.
- Designed apartment dashboards, rent requests, reviews, ratings, and chat system.

### NOTES App — Full Stack
Stack: Django REST Framework, React, SQLite, JWT
GitHub: https://github.com/Shihabul-Shuvo/NOTES_App_using_Django_React_PostgreSQL
- Implemented user-specific CRUD operations with protected routes.
- Integrated frontend and backend using REST APIs and CORS configuration.

### Exclusive Shop — Frontend
Stack: React, TypeScript, Tailwind CSS
GitHub: https://github.com/Shihabul-Shuvo/Exclusive_Shop
Live demo (likely): https://eshopget.netlify.app/ (verify)
- Implemented authentication, cart, wishlist, and responsive design.
- Followed component-based architecture and clean state handling.

### Lift — E-commerce Platform
Stack: PHP, JavaScript, HTML, CSS, MySQL, AJAX
GitHub: https://github.com/Shihabul-Shuvo/Lift
- Developed a full-featured grocery e-commerce website with user and admin panels.
- Implemented product listing, cart, checkout, user authentication, and reporting system.
- Built an admin dashboard to manage products, users, and customer feedback.

## Thesis & Independent Research (proposals, not in current CVs)

### ShinovaNet: Multi-View Hybrid CNN-Transformer with Cross-Attention Fusion and Explainable AI for Breast Cancer Detection — Proposed Research
- Proposed a dual-branch, multi-view architecture combining ResNet50 and Swin-B Transformer to extract local lesion morphology and global mammographic context from paired CC/MLO views.
- Designed learnable cross-attention fusion for intra-view and inter-view semantic alignment, replacing simple concatenation with structured multi-view representation learning.
- Integrated Grad-CAM and Attention Rollout for explainability, BI-RADS-aligned report generation, and cross-dataset robustness evaluation using CBIS-DDSM and VinDr-Mammo.

### Study on Benchmark Datasets for Human Disease Genes — Academic Research
- Analyzed gene–disease associations using benchmark biomedical datasets including DisGeNet, OMIM, CTD, and GWAS.
- Evaluated machine learning models including Decision Trees, Random Forests, SVM, and KNN for classification performance.
- Explored genomic data extraction tools including BioBERT and PubTator.

## Courses & Professional Training

- **Servercamp** — Astha IT. Started May 5, 2026 (ongoing). Focus: Master backend development in 4 months with C#, OOP, ASP.NET, and SQL.
- **Full Stack Web Development with Python, Django & React** — Oct 2025 – Ongoing. Focus: JavaScript, Python, HTML, CSS, Django, and React.
- **Industrial Robot Operation and Troubleshooting** — BITAC, Dhaka (Tejgaon). Jul 2025 – Oct 2025. Focus: Robot simulation, robot programming, troubleshooting, and Malfabasic language.

## Competitive Programming
- Codeforces: https://codeforces.com/profile/breakboy3467
- LeetCode: https://leetcode.com/u/breakBoy75/
- Participated in Intra AUST Programming Contest, Fall 2021.

## Extracurriculars
- **Campus Ambassador** — GUVI Geek Networks, IITM Research Park. 2021 – 2023. Organized a seminar on the importance of Data Science.

## Open Items / To Verify
- Confirm whether the live-demo link (eshopget.netlify.app) belongs to Hospital Management System or Exclusive Shop.
- "In Preparation" publication count on LinkedIn says (3) but only 2 are tracked here (LCM-UNet, CoMAF-Polyp) — confirm if a third exists.
- No Google Scholar profile currently listed — add if one exists.

## CV Variants Generated From This Profile
- `shovo_cv_updated.tex` — Research Assistant-focused CV (publications and research experience emphasized, software projects condensed).
- `shovo_cv_junior_swe.tex` — Junior Software Development-focused CV (skills/projects/professional experience emphasized, research condensed to a brief mention).
