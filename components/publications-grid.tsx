"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Quote, FileText, Search, Copy, Check, Download } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export function PublicationsGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const [copiedDOI, setCopiedDOI] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  // Function to generate BibTeX string dynamically
  const generateBibtex = (publication: any) => {
    const authors = publication.authors || ""
    const title = publication.title || ""
    const journal = publication.journal || ""
    const year = publication.year || ""
    const doi = publication.doi || ""
    const key = authors.split(",")[0].replace(/\s+/g, "") + year

    return `@article{${key},
  title={${title}},
  author={${authors}},
  journal={${journal}},
  year={${year}}${doi ? `,
  doi={${doi}}` : ""}
}`
  }

  const publications = [
    {
      title: "Flexural Fatigue Design of Steel Fibre Reinforced Concrete Pavements: A Comparative Study",
      authors: "Ajeesh Koorikkattil, Sunitha K. Nayar, Veena Venudharan",
      journal: "Road Materials and Pavement Design",
      year: "2022",
      type: "Journal Article",
      featured: true,
      doi: "10.1080/14680629.2022.2139285",
      url: "https://doi.org/10.1080/14680629.2022.2139285",
      pdfUrl: "",
      citations: 8,
      volume: "",
      issue: "",
      pages: "",
      publisher: "Taylor & Francis",
      scholarArticles: [],
      abstract: "A comprehensive comparative study on the flexural fatigue design considerations for steel fibre reinforced concrete pavements, providing insights into material behavior and design optimization."
    },
    {
      title: "Investigation of Cracking Performance of Asphalt-Rubber Gap-Graded Mixtures: Statistical Overview on Materials' Interface",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Journal of Testing and Evaluation",
      year: "2019",
      type: "Journal Article",
      featured: true,
      doi: "10.1520/JTE20180744",
      url: "https://doi.org/10.1520/JTE20180744",
      pdfUrl: "",
      citations: 12,
      volume: "47",
      issue: "5",
      pages: "3336-3354",
      publisher: "ASTM International",
      scholarArticles: [],
      abstract: "Statistical analysis of cracking performance in asphalt-rubber gap-graded mixtures, focusing on the material interface characteristics and their impact on pavement durability."
    },
    {
      title: "Estimation of Phase Angles of Asphalt Mixtures using Resilient Modulus Test",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Construction and Building Materials",
      year: "2015",
      type: "Journal Article",
      featured: true,
      doi: "10.1016/j.conbuildmat.2015.02.061",
      url: "https://doi.org/10.1016/j.conbuildmat.2015.02.061",
      pdfUrl: "",
      citations: 30,
      volume: "82",
      pages: "274-286",
      publisher: "Elsevier",
      scholarArticles: [],
      abstract: "Development of a novel approach for estimating phase angles of asphalt mixtures through resilient modulus testing, providing insights into material characterization and performance prediction."
    },
    {
      title: "Influence of Blending Parameters on Temperature Susceptibility of Rice Husk Ash Modified Asphalt",
      authors: "K Bhavinlal, Veena Venudharan",
      journal: "Transportation in Developing Economies",
      year: "2025",
      type: "Journal Article",
      featured: true,
      doi: "10.1007/s40890-024-0123-4",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:-f6ydRqryjwC",
      pdfUrl: "/papers/rice-husk-ash-modified-asphalt.pdf",
      citations: 15,
      volume: "11",
      issue: "2",
      pages: "1-15",
      publisher: "Springer International Publishing",
      scholarArticles: [
        {
          title: "Influence of Blending Parameters on Temperature Susceptibility of Rice Husk Ash Modified Asphalt",
          authors: "K Bhavinlal, V Venudharan",
          journal: "Transportation in Developing Economies",
          year: "2025",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:-f6ydRqryjwC",
        },
        {
          title: "Related articles",
          url: "#",
        },
      ],
      abstract:
        "Asphalt modification is one of the best methods for enhancing the performance and longevity of flexible pavements that are subjected to high traffic volumes and varied climatic changes. Due to the potential of enhancing asphalt performance and having zero environmental footprint, bio-modifiers received wide attention globally. As a bio-based asphalt modifier, Rice Husk Ash (RHA), a large-scale by-product of rice manufacturing, was found to be a promising candidate. The production process of RHA Modified Asphalt (RMA) is a crucial stage for the development of a better-performing modified asphalt and depends on the blending parameters considered. Therefore, the objective of this research work was to investigate the effect of blending parameters on the temperature susceptibility of RMA based on the laboratory experiment results and a comprehensive statistical analysis. The blending parameters considered …",
    },
    {
      title: "Prospects of Warm Mix Asphalt in Maximizing Reclaimed Asphalt Pavement Utilization: Review on Mix Design and Performance",
      authors: "KM Arun Sagar, Veena Venudharan, Gourab Saha",
      journal: "Cleaner Waste Systems",
      year: "2025",
      type: "Journal Article",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:qUcmZB5y_30C",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "100229",
      publisher: "Elsevier",
      scholarArticles: [
        {
          title: "Prospects of Warm Mix Asphalt in Maximizing Reclaimed Asphalt Pavement Utilization: Review on Mix Design and Performance",
          url: "",
        },
        {
          title: "Related articles",
          url: "#",
        },
      ],
      abstract:
        "Over the last decade, pavement engineers have been in search of technology to incorporate a maximum percentage of Reclaimed Asphalt Pavement (RAP) into the mix. The production of Warm Mix Asphalt (WMA) at a lower temperature than Hot Mix Asphalt (HMA) gained the popularity of WMA-RAP technology due to its workability and reduced cost of construction. Although both WMA and RAP possess certain limitations as standalone technologies, their integration into WMA-RAP technology presents the possibility of mitigating the drawbacks associated with each when utilized jointly, particularly enhancing the performance of the WMA-RAP technology. The objective of this manuscript is to review and organize the information related to the high RAP incorporation in WMA technologies. The scope of the review is to understand the behavior of the WMA-RAP mixes and their performance all over the world. The …",
    },
    {
      title: "Exploring Production and Performance of Popular Bio-Oil Modified Asphalts: A State-of-the-Art Research Review",
      authors: "K Bhavinlal, Veena Venudharan",
      journal: "Innovative Infrastructure Solutions",
      year: "2024",
      type: "Journal Article",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:dhFuZR0502QC",
      pdfUrl: "",
      citations: 1,
      volume: "9",
      issue: "10",
      pages: "403",
      publisher: "Springer International Publishing",
      scholarArticles: [
        {
          title: "Exploring Production and Performance of Popular Bio-Oil Modified Asphalts: A State-of-the-Art Research Review",
          authors: "K Bhavinlal, V Venudharan",
          journal: "Innovative Infrastructure Solutions",
          year: "2024",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:dhFuZR0502QC"
        },
        {
          title: "Related articles",
          url: "#"
        }
      ],
      abstract:
        "Asphalt modification is one of the effective techniques to enhance the performance of flexible roadways exposed to heavy traffic and high-temperature variations. Among these methods, the utilization of bio-oils has gained global acclaim due to their compatibility with asphalt and subsequent performance improvements. This review paper primarily focuses on the current state-of-the-art of eight extensively studied bio-oil modified asphalts using soybean, algae, sunflower, castor, wood, palm, tall, and swine manure bio-oils. It covers characteristics, production methods, and performance metrics."
    },
    {
      title: "Yield-line-based Design of Fibre-Reinforced Concrete: Assessment of Suitability of Material Models",
      authors: "Ajeesh Koorikkattil, Sunitha K Nayar, Veena Venudharan",
      journal: "Magazine of Concrete Research",
      year: "2024",
      type: "Journal Article",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:M3ejUd6NZC8C",
      pdfUrl: "",
      citations: 0,
      volume: "77",
      issue: "1-2",
      pages: "3-14",
      publisher: "Emerald Publishing Limited",
      scholarArticles: [
        {
          title: "Yield-line-based Design of Fibre-Reinforced Concrete",
          authors: "A Koorikkattil, SK Nayar, V Venudharan",
          journal: "Magazine of Concrete Research",
          year: "2024",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:M3ejUd6NZC8C"
        },
        {
          title: "Related articles",
          url: "#"
        }
      ],
      abstract:
        "This study assesses the validity of using flexural toughness-based material models for designing fibre-reinforced concrete. Experiments were conducted using various fibres and mixes to compare theoretical and real-life yield-line-based load capacities, offering insights into FRC applications in slabs and pavements."
    },
    {
      title: "Comparative Life Cycle Assessment of Flexible Pavement Construction Using Cement-Only and Mineral Stabilizer Approaches: A Case Study",
      authors: "Sudeshna Purkayastha, Veena Venudharan, Ajithkumar Vadakkoot",
      journal: "Spring Convention & conference on advanced construction materials and processes for a carbon neutral society, Milan, Italy",
      year: "2024",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "A comparative life cycle assessment of flexible pavement construction using cement-only and mineral stabilizer approaches."
    },
    {
      title: "Rice Husk Ash Modified Asphalt: A Sustainable Alternative Binder to Petroleum Asphalt",
      authors: "Bhavinlal K, Veena Venudharan",
      journal: "Spring Convention & conference on advanced construction materials and processes for a carbon neutral society, Milan, Italy",
      year: "2024",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Rice Husk Ash as a sustainable alternative binder for petroleum asphalt."
    },
    {
      title: "Life Cycle Analysis of Flexible Pavements Designed as per IRC 37:2018",
      authors: "Sashi Kumar Dusa, Sunitha K Nayar, Arun Sagar, Veena Venudharan",
      journal: "7th Conference of Transportation Research Group of India (CTRG-2023), Surat, India",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Life cycle analysis of flexible pavements designed as per IRC 37:2018."
    },
    {
      title: "Influence of Blending Parameters on Rice Husk Ash Modified Asphalt: Statistical Analysis on Temperature Susceptibility",
      authors: "Bhavinlal K, Veena Venudharan",
      journal: "7th Conference of Transportation Research Group of India (CTRG-2023), Surat, India",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Statistical analysis on temperature susceptibility of RHA modified asphalt."
    },
    {
      title: "Impact of aging on RAP characteristics",
      authors: "Arun Sagar, Veena Venudharan",
      journal: "IRF Global R2T Conference, Phoenix, AZ",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Impact of aging on RAP characteristics."
    },
    {
      title: "Development of fatigue-based material models for polypropylene fibre reinforced concrete pavements",
      authors: "Ajeesh K, Sunitha K Nayar, Veena Venudharan",
      journal: "IRF Global R2T Conference, Phoenix, AZ",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Development of fatigue-based material models for polypropylene fibre reinforced concrete pavements."
    },
    {
      title: "Rice Husk Ash Modified Asphalt: A Macro-level Investigation on the Impact of Rice Husk Ash on Aging Characteristics",
      authors: "Bhavinlal K, Veena Venudharan",
      journal: "IRF Global R2T Conference, Phoenix, AZ",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Macro-level investigation on the impact of RHA on aging characteristics."
    },
    {
      title: "Fatigue testing protocol for validation of design models for SFRC pavement slabs",
      authors: "Ajeesh K, Sunitha K Nayar, Veena Venudharan",
      journal: "77th RILEM Annual Week and 1st Interdisciplinary Symposium on Smart & Sustainable Infrastructures (ISSSI 2023), Vancouver, Canada",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Fatigue testing protocol for validation of design models for SFRC pavement slabs."
    },
    {
      title: "Comparative assessment of the sustainability value of jointed plain concrete pavements and fibre reinforced concrete pavements",
      authors: "Ajeesh K, Sunitha K Nayar, Veena Venudharan",
      journal: "International Conference on Resource Sustainability (icRS 2023), Guildford, Surrey, UK",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Comparative assessment of sustainability value of JPCP and FRC pavements."
    },
    {
      title: "Rice Husk Ash Modified Asphalt: A high-performing bio-binder for asphalt pavements",
      authors: "Bhavinlal K, Veena Venudharan",
      journal: "International Conference on Innovative Methods and Practical Applications for Cognizant Transportation Systems, Trivandrum, India",
      year: "2023",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "High-performing bio-binder for asphalt pavements using RHA."
    },
    {
      title: "Effect of Subgrade Stabilization on Pavement Design: Material Optimization & Economic Impact",
      authors: "Sudeshna Purkayastha, Ritu Raj Patel, Veena Venudharan, Ajithkumar Vadakkoot",
      journal: "14th International Conference on Transportation Planning and Implementation Methodologies for Developing Countries (TPMDC), IIT Bombay",
      year: "2022",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Effect of subgrade stabilization on pavement design, focusing on material optimization and economic impact."
    },
    {
      title: "Subgrade Stabilization Using NovoCrete: A Step Towards Resilient Pavement",
      authors: "Sudeshna Purkayastha, Veena Venudharan, Ajithkumar Vadakkoot",
      journal: "National Conference on Resilient Infrastructure 2022 (NCRI 2022), Trivandrum",
      year: "2022",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Subgrade stabilization using NovoCrete for resilient pavement."
    },
    {
      title: "Sustainability of AR-Gap pavements: A comparative environmental impact analysis",
      authors: "Koyyuru Karunakar, Arun Sagar, Veena Venudharan",
      journal: "2nd International Conference on Transportation Infrastructure Projects: Conception to Execution, IIT Roorkee",
      year: "2022",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Comparative environmental impact analysis of AR-Gap pavements."
    },
    {
      title: "Statistical modelling of flexural fatigue response of steel fibre reinforced concrete",
      authors: "Ajeesh K, Sunitha K Nayar, Veena Venudharan",
      journal: "RILEM -fib X International Symposium on Fibre Reinforced Concrete BEFIB2021, Spain",
      year: "2021",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Statistical modelling of flexural fatigue response of steel fibre reinforced concrete."
    },
    {
      title: "Flexural fatigue behavior of uncracked steel fibre reinforced concrete: A comparative study",
      authors: "Ajeesh K, Sunitha K Nayar, Veena Venudharan",
      journal: "2021 International Conference on Resource Sustainability - Sustainable Pavement Technologies",
      year: "2021",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Comparative study of flexural fatigue behavior in uncracked SFRC."
    },
    {
      title: "Mechanistic Characterization of Asphalt-Rubber Gap Graded Mixtures: A Study on Resilient and Dynamic Moduli",
      authors: "Mark Nari Lingfa, Veena Venudharan",
      journal: "2021 International Conference on Resource Sustainability - Sustainable Pavement Technologies",
      year: "2021",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Mechanistic characterization of AR-Gap mixtures focusing on resilient and dynamic moduli."
    },
    {
      title: "Flexural Fatigue Modelling of Steel Fibre Reinforced Concrete",
      authors: "Ajeesh K, Sunitha K Nayar, Veena Venudharan",
      journal: "National Conference on Resilient Infrastructure (NCRI 2020), Trivandrum",
      year: "2020",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Fatigue modelling of steel fibre reinforced concrete."
    },
    {
      title: "Design and Economic Impacts of Soil Stabilization using Rice Husk Ash: Quantitative Material Optimization",
      authors: "Gyan Ranjan Rout, Veena Venudharan",
      journal: "13th International Conference on Transportation Planning and Implementation Methodologies for Developing Countries",
      year: "2020",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Design and economic impacts of soil stabilization using RHA."
    },
    {
      title: "Conceptualization of Three-Stage Fatigue Failure in Asphalt-Rubber Gap-graded Mixtures using Dynamic Semi-Circular Bending Test",
      authors: "Veena Venudharan, Krishna Prapoorna Biligiri",
      journal: "99th Annual Meeting of Transportation Research Board, Washington, DC",
      year: "2020",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Conceptualization of three-stage fatigue failure in AR-Gap mixtures using dynamic SCB test."
    },
    {
      title: "Mechanistic Performance Prediction of Flexible Pavements at Varying Vehicular Speeds: An Approach to Address Frequency Singularity",
      authors: "Gourab Saha, Veena Venudharan, Vinay H N, Krishna Prapoorna Biligiri, Kamil E. Kaloush",
      journal: "IRF Global Road2Tunnel Conference, Las Vegas",
      year: "2018",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Mechanistic performance prediction of flexible pavements at varying vehicular speeds."
    },
    {
      title: "Performance Characterization of Reacted and Activated Rubber Modified Gap Graded Asphalt Mixtures",
      authors: "Satyajit Kumar, Veena Venudharan, Krishna Prapoorna Biligiri, Jorge B. Sousa",
      journal: "Rubberized Asphalt Rubber 2018 (RAR2018), South Africa",
      year: "2018",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Performance characterization of reacted and activated rubber modified gap graded asphalt mixtures."
    },
    {
      title: "Field Investigations on Asphalt-Rubber Gap-Graded (AR-Gap) Pavements Placed on Highways in India",
      authors: "Veena Venudharan, Krishna P Biligiri, Ashish Kumar, Ujjwal Kumar Mukherjee",
      journal: "Rubberized Asphalt Rubber 2018 (RAR2018), South Africa",
      year: "2018",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Field investigations on AR-Gap pavements placed on highways in India."
    },
    {
      title: "Investigation on Rutting Performance of Gap-Graded Asphalt Mixtures: Study on Aggregate Gradation",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "4th Conference of Transportation Research Group of India (CTRG), Mumbai, India",
      year: "2017",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Investigation on rutting performance of gap-graded asphalt mixtures with a focus on aggregate gradation."
    },
    {
      title: "Cracking Performance Investigation of Asphalt-Rubber Gap-Graded Mixtures: Emphasis on Aggregate Gradation",
      authors: "Veena Venudharan, Gourab Saha, Krishna P. Biligiri",
      journal: "IRF Middle East & North Africa Regional Congress & Exhibition, Dubai, UAE",
      year: "2017",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Cracking performance investigation of AR-Gap mixtures with emphasis on aggregate gradation."
    },
    {
      title: "Effect of Aggregate Gradation on Rutting Performance of Asphalt-Rubber Gap Graded Mixtures",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "International Conference on Advances in Construction Materials and Systems, IIT Madras, RILEM2017, India",
      year: "2017",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Effect of aggregate gradation on rutting performance of AR-Gap mixtures."
    },
    {
      title: "Study on Recovery Behavior of Crumb Rubber Modified Asphalt Binders",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Transportation Planning and Implementation Methodologies for Developing Countries, Mumbai, India",
      year: "2016",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Study on recovery behavior of crumb rubber modified asphalt binders."
    },
    {
      title: "Statistical Evaluation of Crumb Rubber Modification Procedure in Asphalt Binder Modification",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "2nd IRF Asia Regional Congress & Exhibition, Kuala Lumpur, Malaysia",
      year: "2016",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Statistical evaluation of crumb rubber modification procedure in asphalt binder modification."
    },
    {
      title: "Rutting Performance Evaluation of Crumb Rubber- Modified Binders using Advanced Rheological Test Parameters",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "8th International Conference on Maintenance and Rehabilitation of Pavements (MAIREPAV8)",
      year: "2016",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Rutting performance evaluation of crumb rubber-modified binders using advanced rheological test parameters."
    },
    {
      title: "Investigation on Creep and Recovery Behavior of Rubber Modified Asphalt Binders",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Conference on Sustainable Asphalt Pavements for Developing Countries (CONSAP 2016), CRRI, New Delhi, India",
      year: "2016",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Investigation on creep and recovery behavior of rubber modified asphalt binders."
    },
    {
      title: "Influence of Blending Parameters on Rice Husk Ash Modified Asphalt: Multi-level Optimization and Validation",
      authors: "Bhavinlal K, Veena Venudharan",
      journal: "ASTM Journal of Testing and Evaluation",
      year: "2025",
      type: "Journal Article",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "ASTM International",
      scholarArticles: [],
      abstract: "Investigation of blending parameters for Rice Husk Ash modified asphalt using multi-level optimization techniques and experimental validation.",
      status: "Under Review"
    },
    {
      title: "Conceptualization of Three-Stage Fatigue Failure in Asphalt-Rubber Gap-Graded Mixtures using Dynamic Semi-Circular Bending Test",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Transportation Research Record",
      year: "2020",
      type: "Journal Article",
      featured: true,
      doi: "10.1177/0361198120920872",
      url: "https://doi.org/10.1177/0361198120920872",
      pdfUrl: "",
      citations: 15,
      volume: "2674",
      issue: "7",
      pages: "44-55",
      publisher: "SAGE Publishing",
      scholarArticles: [],
      abstract: "This study presents a novel conceptualization of three-stage fatigue failure in asphalt-rubber gap-graded mixtures through dynamic semi-circular bending tests, providing valuable insights into pavement material behavior."
    },
    {
      title: "A Novel Design Toolkit to Assess Asphalt-Rubber Gap-Graded Mixture Performance: Target Properties and Parametric Relationships",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Construction and Building Materials",
      year: "2019",
      type: "Journal Article",
      featured: true,
      doi: "10.1016/j.conbuildmat.2019.05.165",
      url: "https://doi.org/10.1016/j.conbuildmat.2019.05.165",
      pdfUrl: "",
      citations: 25,
      volume: "219",
      pages: "69-80",
      publisher: "Elsevier",
      scholarArticles: [],
      abstract: "Development of a comprehensive design toolkit for assessing asphalt-rubber gap-graded mixture performance, establishing target properties and key parametric relationships."
    },
    {
      title: "Effect of Crumb Rubber Gradation on Asphalt Binder Modification: Rheological Evaluation, Optimization and Selection",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Materials and Structures",
      year: "2017",
      type: "Journal Article",
      featured: true,
      doi: "10.1617/s11527-017-0994-x",
      url: "https://doi.org/10.1617/s11527-017-0994-x",
      pdfUrl: "",
      citations: 45,
      volume: "50",
      issue: "2",
      publisher: "Springer",
      scholarArticles: [],
      abstract: "Investigation of crumb rubber gradation effects on asphalt binder modification through rheological evaluation and optimization techniques."
    },
    {
      title: "Influence of Blending Parameters on Temperature Susceptibility of Rice Husk Ash Modified Asphalt",
      authors: "Bhavinlal K, Veena Venudharan",
      journal: "Transportation in Developing Economies",
      year: "Under Review",
      type: "Journal Article",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "Springer",
      scholarArticles: [],
      abstract: "Study on the effect of blending parameters on temperature susceptibility of RHA modified asphalt, currently under review."
    },
    {
      title: "Rutting Performance of Asphalt-Rubber Gap-Graded Mixtures: Statistical and Reliability Approach",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Road Materials and Pavement Design",
      year: "2019",
      type: "Journal Article",
      featured: false,
      doi: "10.1080/14680629.2019.1663752",
      url: "https://doi.org/10.1080/14680629.2019.1663752",
      pdfUrl: "",
      citations: 10,
      volume: "",
      issue: "",
      pages: "1-17",
      publisher: "Taylor and Francis",
      scholarArticles: [],
      abstract: "Statistical and reliability analysis of rutting performance in asphalt-rubber gap-graded mixtures."
    },
    {
      title: "Development and Performance Analysis of Asphalt-Rubber Gap-Graded Mixtures: Study on Aggregate Gradations",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Journal of Testing and Evaluation",
      year: "2018",
      type: "Journal Article",
      featured: false,
      doi: "10.1520/JTE20170751",
      url: "https://doi.org/10.1520/JTE20170751",
      pdfUrl: "",
      citations: 18,
      volume: "48",
      issue: "4",
      pages: "",
      publisher: "ASTM International",
      scholarArticles: [],
      abstract: "Analysis of aggregate gradations in asphalt-rubber gap-graded mixtures and their impact on performance."
    },
    {
      title: "Investigation on Behavioral Characteristics of Asphalt Binder with Crumb Rubber Modification: Rheological and Thermo-Chemical Approach",
      authors: "Veena Venudharan, Krishna P. Biligiri, Narayan Chandra Das",
      journal: "Construction and Building Materials",
      year: "2018",
      type: "Journal Article",
      featured: false,
      doi: "10.1016/j.conbuildmat.2018.06.087",
      url: "https://doi.org/10.1016/j.conbuildmat.2018.06.087",
      pdfUrl: "",
      citations: 20,
      volume: "181",
      pages: "455-464",
      publisher: "Elsevier",
      scholarArticles: [],
      abstract: "Rheological and thermo-chemical investigation of crumb rubber modified asphalt binder."
    },
    {
      title: "Heuristic Principles to Predict the Effect of Crumb Rubber Gradation on Asphalt Binder Rutting Performance",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Journal of Materials in Civil Engineering",
      year: "2017",
      type: "Journal Article",
      featured: false,
      doi: "10.1061/(ASCE)MT.1943-5533.0001880",
      url: "https://doi.org/10.1061/(ASCE)MT.1943-5533.0001880",
      pdfUrl: "",
      citations: 12,
      volume: "29",
      issue: "8",
      pages: "",
      publisher: "ASCE",
      scholarArticles: [],
      abstract: "Heuristic modeling of crumb rubber gradation effects on rutting performance of asphalt binder."
    },
    {
      title: "Asphalt-rubber Gap-graded Mixture Design Practices: A State-of-the-art Research Review and Future Perspective",
      authors: "Veena Venudharan, Krishna P. Biligiri, Jorge B. Sousa, George B. Way",
      journal: "Road Materials and Pavement Design",
      year: "2017",
      type: "Journal Article",
      featured: false,
      doi: "10.1080/14680629.2016.1182060",
      url: "https://doi.org/10.1080/14680629.2016.1182060",
      pdfUrl: "",
      citations: 30,
      volume: "18",
      issue: "3",
      pages: "730-752",
      publisher: "Taylor and Francis",
      scholarArticles: [],
      abstract: "Comprehensive review of asphalt-rubber gap-graded mixture design practices and future research directions."
    },
    {
      title: "Conceptualization of Permanent Deformation Characteristics of Rubber Modified Asphalt Binders: Energy-based Algorithm and Rheological Modeling",
      authors: "Veena Venudharan, Krishna P. Biligiri",
      journal: "Construction and Building Materials",
      year: "2016",
      type: "Journal Article",
      featured: false,
      doi: "10.1016/j.conbuildmat.2016.09.065",
      url: "https://doi.org/10.1016/j.conbuildmat.2016.09.065",
      pdfUrl: "",
      citations: 14,
      volume: "126",
      pages: "388-397",
      publisher: "Elsevier",
      scholarArticles: [],
      abstract: "Energy-based and rheological modeling of permanent deformation in rubber modified asphalt binders."
    },
    {
      title: "Predictive Models for Storage Modulus (E’) and Loss Modulus (E”) of Asphalt Mixtures",
      authors: "Veena Venudharan, Anush K. Chandrappa, Krishna P. Biligiri, Kamil Kaloush",
      journal: "Journal of Materials in Civil Engineering",
      year: "2016",
      type: "Journal Article",
      featured: false,
      doi: "10.1061/(ASCE)MT.1943-5533.0001550",
      url: "https://doi.org/10.1061/(ASCE)MT.1943-5533.0001550",
      pdfUrl: "",
      citations: 10,
      volume: "28",
      issue: "7",
      pages: "",
      publisher: "ASCE",
      scholarArticles: [],
      abstract: "Development of predictive models for storage and loss modulus of asphalt mixtures."
    },
    {
      title: "Framework for Life Cycle Analysis of Flexible Pavement Alternatives Conforming to IRC 37:2018",
      authors: "Dusa Sashi Kumar, Sunitha K Nayar, Arun Sagar K M, Veena Venudharan",
      journal: "Sustainable and Resilient Infrastructure",
      year: "Under Review",
      type: "Journal Article",
      featured: false,
      doi: "",
      url: "",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      scholarArticles: [],
      abstract: "Framework for life cycle analysis of flexible pavement alternatives conforming to IRC 37:2018. Under review."
    },
    {
      title: "Rice Husk Ash Modified Asphalt: A high-performing bio-binder for asphalt pavements",
      authors: "Bhavinlal K, Veena Venudharan",
      journal: "Cognizant Transportation Systems: Challenges and Opportunities. Lecture Notes in Civil Engineering, Vol. 263. Springer, Singapore.",
      year: "2025",
      type: "Book Chapter",
      featured: false,
      doi: "10.1007/978-981-97-7300-8",
      url: "https://doi.org/10.1007/978-981-97-7300-8",
      pdfUrl: "",
      citations: 0,
      volume: "263",
      issue: "",
      pages: "",
      publisher: "Springer, Singapore",
      scholarArticles: [],
      abstract: "Rice Husk Ash Modified Asphalt: A high-performing bio-binder for asphalt pavements. In: A. Veeraragavan et al. (Eds): Cognizant Transportation Systems: Challenges and Opportunities."
    },
  ]

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      searchTerm === "" ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesYear = selectedYear === "all" || pub.year === selectedYear

    return matchesSearch && matchesYear
  })

  const handleViewPaper = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleDownloadPDF = (pdfUrl: string, title: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = `${title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Download Started",
      description: "PDF download has been initiated",
    })
  }

  const handleCopyDOI = async (doi: string) => {
    try {
      await navigator.clipboard.writeText(doi)
      setCopiedDOI(doi)
      setTimeout(() => setCopiedDOI(null), 2000)
      toast({
        title: "DOI Copied",
        description: "DOI has been copied to clipboard",
      })
    } catch (err) {
      console.error("Failed to copy DOI:", err)
      toast({
        title: "Copy Failed",
        description: "Please copy the DOI manually",
        variant: "destructive",
      })
    }
  }

  const handleCiteBibtex = async (bibtex: string) => {
    try {
      await navigator.clipboard.writeText(bibtex)
      toast({
        title: "Citation Copied",
        description: "BibTeX citation has been copied to clipboard",
      })
    } catch (err) {
      console.error("Failed to copy citation:", err)
      toast({
        title: "Copy Failed",
        description: "Please copy the citation manually",
        variant: "destructive",
      })
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mb-8 -mx-4 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Journal Publications</h2>
          </div>
          <p className="text-blue-100 mb-2">{filteredPublications.length} peer-reviewed journal articles</p>
          <p className="text-blue-200">
            Explore our peer-reviewed journal publications showcasing fundamental research contributions and scientific
            discoveries in pavement engineering and sustainable infrastructure.
          </p>
        </div>
      </div>

      {/* Enhanced Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by title, author, or journal..."
            className="pl-10 hover:border-blue-300 focus:border-blue-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full md:w-48 hover:border-blue-300 focus:border-blue-500 transition-colors">
            <SelectValue placeholder="Filter by year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {filteredPublications.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No publications found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        ) : (
          <>
            {(showAll ? filteredPublications : filteredPublications.slice(0, 10)).map((publication, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  {/* Removed image rendering since 'image' property does not exist on publication */}
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="hover:bg-blue-50">
                        {publication.year}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{publication.type}</Badge>
                      {publication.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Featured</Badge>
                      )}
                      <Badge variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                        {publication.citations} citations
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                    {publication.title}
                  </h3>

                    <div className="mb-3">
                      <p className="text-gray-700 font-medium">Authors:</p>
                      <p className="text-gray-600">{publication.authors}</p>
                    </div>

                    <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-700">
                      <div>
                        <span className="font-semibold">Publication date:</span> {publication.year}
                      </div>
                      <div>
                        <span className="font-semibold">Journal:</span> {publication.journal}
                      </div>
                      <div>
                        <span className="font-semibold">Volume:</span> {publication.volume}
                      </div>
                      <div>
                        <span className="font-semibold">Issue:</span> {publication.issue}
                      </div>
                      <div>
                        <span className="font-semibold">Pages:</span> {publication.pages}
                      </div>
                      <div>
                        <span className="font-semibold">Publisher:</span> {publication.publisher}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{publication.abstract}</p>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                        onClick={() => handleViewPaper(publication.url)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Paper
                      </Button>

                      <Button
                        variant="outline"
                        className="hover:bg-green-50 hover:border-green-300 transition-all duration-200"
                        onClick={() => publication.pdfUrl && handleDownloadPDF(publication.pdfUrl, publication.title)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                          >
                            <Quote className="w-4 h-4 mr-2" />
                            Cite
                          </Button>
                        </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Citation</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">BibTeX</h4>
                  <div className="bg-gray-100 p-4 rounded-lg relative">
                  <pre className="text-sm overflow-x-auto whitespace-pre-wrap break-words">{generateBibtex(publication)}</pre>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2"
                      onClick={() => publication.doi && handleCiteBibtex(generateBibtex(publication))}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">DOI</h4>
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">{publication.doi}</code>
                    <Button size="sm" variant="outline" onClick={() => publication.doi && handleCopyDOI(publication.doi)}>
                      {copiedDOI === publication.doi ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            {!showAll && filteredPublications.length > 10 && (
              <div className="flex justify-center mt-6">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
                  onClick={() => setShowAll(true)}
                >
                  Show More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
