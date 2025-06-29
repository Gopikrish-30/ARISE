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
      title: "Exploring production and performance of popular bio-oil modified asphalts: a state-of-the-art research review",
      authors: "K Bhavinlal, Veena Venudharan",
      journal: "Innovative Infrastructure Solutions",
      year: "2024",
      type: "Journal Article",
      featured: true,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:dhFuZR0502QC",
      pdfUrl: "",
      citations: 1,
      volume: "9",
      issue: "10",
      pages: "403",
      publisher: "Springer International Publishing",
      image: "/images/publications/bio-oil-modified-asphalts.jpg",
      scholarArticles: [
        {
          title: "Exploring production and performance of popular bio-oil modified asphalts: a state-of-the-art research review",
          authors: "K Bhavinlal, V Venudharan",
          journal: "Innovative Infrastructure Solutions",
          year: "2024",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:dhFuZR0502QC",
        },
        {
          title: "Related articles",
          url: "#",
        },
      ],
      abstract:
        "Asphalt modification is one of the effective techniques to enhance the performance of flexible roadways exposed to heavy traffic and high-temperature variations. Among these methods, the utilization of bio-oils has gained global acclaim due to their compatibility with asphalt and subsequent performance improvements. This review paper primarily focuses on the current state-of-the-art of eight extensively studied bio-oil modified asphalt using: (i) Soybean Oil (SBO), (ii) Algae Bio-oil (ABO), (iii) Sunflower Oil (SFO), (iv) Castor Bean Oil (CBO), (v) Wood Bio-oil (WBO), (vi) Palm Oil (PO), (vii) Tall Oil (TO), and (viii) Swine Manure Bio-oil (SMB). The first part of the review comprises a discussion on the physio-chemical characteristics of eight bio-oils utilized in asphalt modification, the second part includes blending methodology, production, and performance characterization of bio-oil modified asphalts, the third part focuses on the …",
    },
    {
      title: "Yield-line-based design of fibre-reinforced concrete: assessment of suitability of material models",
      authors: "Ajeesh Koorikkattil, Sunitha K Nayar, Veena Venudharan",
      journal: "Magazine of Concrete Research",
      year: "2024",
      type: "Journal Article",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:M3ejUd6NZC8C",
      pdfUrl: "",
      citations: 0,
      volume: "77",
      issue: "1-2",
      pages: "3-14",
      publisher: "Emerald Publishing Limited",
      image: "/images/publications/yield-line-fibre-reinforced-concrete.jpg",
      scholarArticles: [
        {
          title: "Yield-line-based design of fibre-reinforced concrete: assessment of suitability of material models",
          authors: "A Koorikkattil, SK Nayar, V Venudharan",
          journal: "Magazine of Concrete Research",
          year: "2024",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:M3ejUd6NZC8C",
        },
        {
          title: "Related articles",
          url: "#",
        },
      ],
      abstract:
        "The aim of this research was to assess the adequacy of material models based on flexural toughness (such as equivalent and residual flexural strength) and the deflection limits at which these parameters are estimated for the design of fibre-reinforced concrete (FRC) for various applications such as slabs-on-grade and pavements. The experimental work was conducted using FRC mixes with hooked-end steel fibres (SF) or macro polypropylene fibres (PF) and hybrid combinations of SF and PF. Toughness testing was carried out on unnotched and notched prisms and square slabs, prepared with a typical grade of concrete used for FRC pavement applications. To validate the material models, comparisons were made between the theoretical moment/load calculated based on material flexural toughness parameters and the actual moment obtained from slabs using the yield line formed during testing. It was found that …",
    },
    {
      title: "Comparative Life Cycle Assessment of Flexible Pavement Construction Using Cement-Only and Mineral Stabilizer Approaches: A Case Study",
      authors: "Sudeshna Purkayastha, Veena Venudharan, Ajithkumar Vadakkoot",
      journal: "RILEM Spring Convention and Conference",
      year: "2024",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:L8Ckcad2t8MC",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "536-545",
      publisher: "Springer Nature Switzerland",
      image: "/images/publications/comparative-life-cycle-assessment.jpg",
      scholarArticles: [
        {
          title: "Comparative Life Cycle Assessment of Flexible Pavement Construction Using Cement-Only and Mineral Stabilizer Approaches: A Case Study",
          authors: "S Purkayastha, V Venudharan, A Vadakkoot",
          journal: "RILEM Spring Convention and Conference",
          year: "2024",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:L8Ckcad2t8MC",
        },
        {
          title: "Related articles",
          url: "#",
        },
      ],
      abstract:
        "Traditional soil stabilization methods have been used for many years to improve the load-bearing capacity, durability, and erosion resistance of soil; however, they have some potential drawbacks including air and water pollution, and increased energy consumption. The most used stabilizer, cement considered for its performance and cost-effectiveness is responsible for approximately 5–7% of total carbon dioxide (CO₂) emissions worldwide. But nowadays, the global trend incorporates sustainability goals while choosing appropriate soil stabilization. In this direction, various sustainable stabilizers, such as enzymes, and pozzolanas have gained significant attention in recent years. This study explores using a calcium-based mineral stabilizer and GGBS, a byproduct of Iron furnace, as a potential alternative to cement in soil stabilization for flexible pavement construction. The main objective of the paper is to evaluate …",
    },
    {
      title: "Rice Husk Ash Modified Asphalt: A Sustainable Alternative Binder to Petroleum Asphalt",
      authors: "K Bhavinlal, Veena Venudharan",
      journal: "RILEM Spring Convention and Conference",
      year: "2024",
      type: "Conference Paper",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:7PzlFSSx8tAC",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "481-490",
      publisher: "Springer Nature Switzerland",
      image: "/images/publications/rice-husk-ash-modified-asphalt.jpg",
      scholarArticles: [
        {
          title: "Rice Husk Ash Modified Asphalt: A Sustainable Alternative Binder to Petroleum Asphalt",
          authors: "K Bhavinlal, V Venudharan",
          journal: "RILEM Spring Convention and Conference",
          year: "2024",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:7PzlFSSx8tAC",
        },
        {
          title: "Related articles",
          url: "#",
        },
      ],
      abstract:
        "Rice Husk Ash (RHA), a largely available agro-industrial bio-waste is utilized in many applications, especially in civil engineering due to its innate favourable properties including high silica content, large specific surface area, and better temperature stability. Several researchers highlighted its beneficial role in the improvement of soil stability and enhancing cement concrete compressive strength. Aside from the inclusion of RHA in soil and cement, limited studies have been conducted on the suitability of RHA as an asphalt modifier. Asphalt modification is an effective technique to improve the quality and performance of conventional asphalt that is exposed to heavy traffic and extreme climatic conditions. Moreover, it aids in the conservation of resources and reduces the carbon footprint by minimizing the usage of asphalt for pavement construction. In that direction, RHA modification on asphalt not only reduces …",
    },
    {
      title: "Estimation of Carbon Footprint using Life Cycle Assessment for Flexible Pavement: Emphasis on User Stage",
      authors: "Naroju Niharika, Subhajit Banerjee, Veena Venudharan, Majji Swathi Sudharsini, Gourab Saha",
      journal: "",
      year: "2024",
      type: "Research Article",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:IWHjjKOFINEC",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      image: "/images/publications/estimation-carbon-footprint.jpg",
      scholarArticles: [
        {
          title: "Estimation of Carbon Footprint using Life Cycle Assessment for Flexible Pavement: Emphasis on User Stage",
          authors: "N Niharika, S Banerjee, V Venudharan, MS Sudharsini, G Saha",
          year: "2024",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:IWHjjKOFINEC",
        },
        {
          title: "Related articles",
          url: "#",
        },
      ],
      abstract:
        "The amount of carbon dioxide released into the atmosphere from pavements during their lifespan measures the sustainability of the structures. The objective of this study is to quantify the greenhouse gas in terms of kgCO2eq released during the user stage of flexible pavement. The scope of this study includes the synthesis of relevant databases, collection of the International Roughness Index (IRI), computation of the life-cycle of analysis, and estimation of kgCO2eq during various stages of pavement service time. Two pavement sections with different design variables were chosen to differentiate and identify the impacts of design variables on carbon emission. Though several research studies had explored the carbon emission potential from different pavement systems, this study offered a first-of-its-kind understanding that emphasized the carbon emission incurred during the user stage in the context of IRI and Average Annual Daily Traffic (AADT). In this study, two models were developed based on LTPP data to understand the variation of IRI and AADT in terms of PCU. Furthermore, the Monte Carlo Simulation technique was used to predict variation of IRI for 20 years. A statistical analysis F-test was carried out and found that there is a significant disparity in total emissions despite both pavement sections having identical layer thicknesses. It can be concluded that in flexible pavement, road roughness results in higher fuel consumption of vehicles which consequently leads to higher emissions of greenhouse gases. Overall, it is envisaged that this study would provide important insights into the sustainability features of flexible pavement during the …",
    },
    {
      title: "Impacts of Crumb Rubber Gradation on Fatigue Performance of Asphalt Mixtures",
      authors: "Prakrutibahen Kishorbhai Tandel, Durgesh Kumar Verma, Veena Venudharan, Gourab Saha",
      journal: "",
      year: "2024",
      type: "Research Article",
      featured: false,
      doi: "",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&sortby=pubdate&citation_for_view=phmpBCsAAAAJ:4TOpqqG69KYC",
      pdfUrl: "",
      citations: 0,
      volume: "",
      issue: "",
      pages: "",
      publisher: "",
      image: "/images/publications/crumb-rubber-gradation.jpg",
      scholarArticles: [
        {
          title: "Impacts of Crumb Rubber Gradation on Fatigue Performance of Asphalt Mixtures",

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
          filteredPublications.map((publication, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg"
            >
              <CardContent className="p-6">
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
                    onClick={() => handleDownloadPDF(publication.pdfUrl, publication.title)}
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
                    onClick={() => handleCiteBibtex(generateBibtex(publication))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">DOI</h4>
                <div className="flex items-center gap-2">
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">{publication.doi}</code>
                  <Button size="sm" variant="outline" onClick={() => handleCopyDOI(publication.doi)}>
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
          ))
        )}
      </div>
    </div>
  )
}
