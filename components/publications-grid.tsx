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
  journal: "RILEM Spring Convention and Conference",
  year: "2024",
  type: "Conference Paper",
  featured: false,
  doi: "",
  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:L8Ckcad2t8MC",
  pdfUrl: "",
  citations: 0,
  volume: "",
  issue: "",
  pages: "536-545",
  publisher: "Springer Nature Switzerland",
  scholarArticles: [
    {
      title: "Comparative Life Cycle Assessment of Flexible Pavement Construction...",
      authors: "S Purkayastha, V Venudharan, A Vadakkoot",
      journal: "RILEM Spring Convention and Conference",
      year: "2024",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:L8Ckcad2t8MC"
    },
    {
      title: "Related articles",
      url: "#"
    }
  ],
  abstract:
    "This paper compares traditional cement-based stabilization with sustainable mineral stabilizers (e.g., GGBS) in flexible pavement construction using life cycle assessment techniques. It evaluates environmental impact, particularly CO2 emissions, and promotes greener alternatives for sustainable infrastructure."
},
{
  title: "Rice Husk Ash Modified Asphalt: A Sustainable Alternative Binder to Petroleum Asphalt",
  authors: "K Bhavinlal, Veena Venudharan",
  journal: "RILEM Spring Convention and Conference",
  year: "2024",
  type: "Conference Paper",
  featured: false,
  doi: "",
  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:7PzlFSSx8tAC",
  pdfUrl: "",
  citations: 0,
  volume: "",
  issue: "",
  pages: "481-490",
  publisher: "Springer Nature Switzerland",
  scholarArticles: [
    {
      title: "Rice Husk Ash Modified Asphalt: A Sustainable Alternative Binder...",
      authors: "K Bhavinlal, V Venudharan",
      journal: "RILEM Spring Convention and Conference",
      year: "2024",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:7PzlFSSx8tAC"
    },
    {
      title: "Related articles",
      url: "#"
    }
  ],
  abstract:
    "The paper investigates Rice Husk Ash (RHA) as a sustainable alternative to petroleum asphalt, focusing on its properties like high silica content and thermal stability. The study highlights the potential of RHA to improve asphalt performance while reducing environmental impact."
},
{
  title: "Estimation of Carbon Footprint using Life Cycle Assessment for Flexible Pavement: Emphasis on User Stage",
  authors: "Naroju Niharika, Subhajit Banerjee, Veena Venudharan, Majji Swathi Sudharsini, Gourab Saha",
  journal: "",
  year: "2024",
  type: "Journal Article",
  featured: false,
  doi: "",
  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:IWHjjKOFINEC",
  pdfUrl: "",
  citations: 0,
  volume: "",
  issue: "",
  pages: "",
  publisher: "",
  scholarArticles: [
    {
      title: "Estimation of Carbon Footprint using Life Cycle Assessment for Flexible Pavement...",
      authors: "N Niharika, S Banerjee, V Venudharan, MS Sudharsini, G Saha",
      year: "2024",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:IWHjjKOFINEC"
    },
    {
      title: "Related articles",
      url: "#"
    }
  ],
  abstract:
    "This study quantifies carbon emissions during the user stage of flexible pavements using IRI and AADT data. It introduces a Monte Carlo simulation approach and statistical F-tests to show how design choices influence emissions due to pavement roughness and associated fuel usage."
},
{
  title: "Impacts of Crumb Rubber Gradation on Fatigue Performance of Asphalt Mixtures",
  authors: "Prakrutibahen Kishorbhai Tandel, Durgesh Kumar Verma, Veena Venudharan, Gourab Saha",
  journal: "",
  year: "2024",
  type: "Journal Article",
  featured: false,
  doi: "",
  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:4TOpqqG69KYC",
  pdfUrl: "",
  citations: 0,
  volume: "",
  issue: "",
  pages: "",
  publisher: "",
  scholarArticles: [
    {
      title: "Impacts of Crumb Rubber Gradation on Fatigue Performance of Asphalt Mixtures",
      authors: "PK Tandel, DK Verma, V Venudharan, G Saha",
      year: "2024",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:4TOpqqG69KYC"
    },
    {
      title: "Related articles",
      url: "#"
    }
  ],
  abstract:
    "The study explores the effect of different crumb rubber gradations on asphalt fatigue resistance using dynamic SCB tests. Fine-graded rubber showed superior performance. The findings support optimized waste material use in sustainable pavement engineering."
},
{
  title: "Influence of Blending Parameters on Rice Husk Ash Modified Asphalt: Statistical Analysis on Temperature Susceptibility",
  authors: "K Bhavinlal, Veena Venudharan",
  journal: "7th Conference of Transportation Research Group of India (CTRG-2023)",
  year: "2023",
  type: "Conference Paper",
  featured: false,
  doi: "",
  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:QIV2ME_5wuYC",
  pdfUrl: "",
  citations: 0,
  volume: "",
  issue: "",
  pages: "",
  publisher: "",
  scholarArticles: [
    {
      title: "Influence of Blending Parameters on Rice Husk Ash Modified Asphalt",
      authors: "K Bhavinlal, V Venudharan",
      year: "2023",
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=phmpBCsAAAAJ&citation_for_view=phmpBCsAAAAJ:QIV2ME_5wuYC"
    },
    {
      title: "Related articles",
      url: "#"
    }
  ],
  abstract:
    "Presented at CTRG-2023, this study focuses on the statistical analysis of temperature susceptibility in Rice Husk Ash modified asphalt binders, identifying optimal blending parameters for enhanced asphalt performance under varying temperatures."
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
          filteredPublications.map((publication, index) => (
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
          ))
        )}
      </div>
    </div>
  )
}
