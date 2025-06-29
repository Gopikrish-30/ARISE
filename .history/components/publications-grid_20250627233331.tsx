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
  year={${year}},
  doi={${doi}}
}`
  }

  const publications = [
    {
      title: "Influence of Blending Parameters on Temperature Susceptibility of Rice Husk Ash Modified Asphalt",
      authors: "K Bhavinlal, V Venudharan",
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
        "Asphalt modification is one of the best methods for enhancing the performance and longevity of flexible pavements that are subjected to high traffic volumes and varied climatic changes. Due to the potential of enhancing asphalt performance and having zero environmental footprint, bio-modifiers received wide attention globally. As a bio-based asphalt modifier, Rice Husk Ash (RHA) product of rice manufacturing, was found to be a promising candidate. The production process of RHA Modified Asphalt (RMA) is a crucial stage for the development of a better-performing modified asphalt and depends on the blending parameters considered. Therefore, the objective of this research work was to investigate the effect of blending parameters on the temperature susceptibility of RMA based on the laboratory experiment results and a comprehensive statistical analysis.",
    },
    {
      title: "Sustainable Pavement Materials: A Comprehensive Review",
      authors: "V Venudharan, A Patel, R Kumar",
      journal: "Journal of Cleaner Production",
      year: "2024",
      type: "Journal Article",
      featured: false,
      doi: "10.1016/j.jclepro.2024.123456",
      url: "https://www.sciencedirect.com/science/article/example",
      pdfUrl: "/papers/sustainable-pavement-materials.pdf",
      citations: 28,
      abstract:
        "This comprehensive review examines the latest developments in sustainable pavement materials, focusing on recycled content, bio-based modifiers, and environmental impact assessment. The paper provides insights into material performance, cost-effectiveness, and long-term sustainability of various pavement solutions.",
      bibtex: `@article{venudharan2024sustainable,
  title={Sustainable Pavement Materials: A Comprehensive Review},
  author={Venudharan, V and Patel, A and Kumar, R},
  journal={Journal of Cleaner Production},
  year={2024},
  doi={10.1016/j.jclepro.2024.123456}
}`,
    },
    {
      title: "Performance Evaluation of Warm Mix Asphalt Technologies",
      authors: "R Gupta, V Venudharan, P Sharma",
      journal: "Construction and Building Materials",
      year: "2024",
      type: "Journal Article",
      featured: false,
      doi: "10.1016/j.conbuildmat.2024.123456",
      url: "https://www.sciencedirect.com/science/article/example",
      pdfUrl: "/papers/warm-mix-asphalt-technologies.pdf",
      citations: 12,
      abstract:
        "This study evaluates the performance of various warm mix asphalt technologies under different climatic conditions. The research demonstrates the potential for energy savings and environmental benefits while maintaining pavement performance standards.",
      bibtex: `@article{gupta2024performance,
  title={Performance Evaluation of Warm Mix Asphalt Technologies},
  author={Gupta, R and Venudharan, V and Sharma, P},
  journal={Construction and Building Materials},
  year={2024},
  doi={10.1016/j.conbuildmat.2024.123456}
}`,
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
                  <pre className="text-sm overflow-x-auto">{generateBibtex(publication)}</pre>
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
