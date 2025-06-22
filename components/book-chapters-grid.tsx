"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen } from "lucide-react"

export function BookChaptersGrid() {
  const chapters = [
    {
      title: "Machine Learning Applications in Civil Engineering",
      authors: "V Venudharan, R Kumar",
      book: "Advances in Engineering Applications of AI",
      publisher: "Springer",
      year: "2024",
      pages: "245-278",
      isbn: "978-3-030-12345-6",
      abstract:
        "This chapter explores the integration of machine learning techniques in civil engineering applications, focusing on predictive modeling and optimization.",
      chapterUrl: "https://example.com/chapter1",
      publisherUrl: "https://example.com/publisher1",
      pdfUrl: "https://example.com/chapter1.pdf",
    },
    {
      title: "Deep Learning for Medical Image Analysis",
      authors: "A Patel, R Kumar, S Reddy",
      book: "Handbook of Medical AI",
      publisher: "Elsevier",
      year: "2023",
      pages: "156-189",
      isbn: "978-0-123-45678-9",
      abstract:
        "Comprehensive overview of deep learning methodologies applied to medical image analysis and diagnostic applications.",
      chapterUrl: "https://example.com/chapter2",
      publisherUrl: "https://example.com/publisher2",
      pdfUrl: "https://example.com/chapter2.pdf",
    },
    {
      title: "Autonomous Systems and Robotics: Current Trends",
      authors: "P Sharma, R Gupta",
      book: "Future of Robotics and Automation",
      publisher: "IEEE Press",
      year: "2023",
      pages: "89-124",
      isbn: "978-1-234-56789-0",
      abstract: "Discussion of current trends and future directions in autonomous systems and robotics technology.",
      chapterUrl: "https://example.com/chapter3",
      publisherUrl: "https://example.com/publisher3",
      pdfUrl: "https://example.com/chapter3.pdf",
    },
  ]

  const handleViewChapter = (chapter: any) => {
    window.open(chapter.chapterUrl || "#", "_blank")
  }

  const handlePublisherLink = (chapter: any) => {
    window.open(chapter.publisherUrl || "#", "_blank")
  }

  const handleDownloadChapter = (chapter: any) => {
    const link = document.createElement("a")
    link.href = chapter.pdfUrl || "#"
    link.download = `${chapter.title.replace(/[^a-z0-9]/gi, "_")}_chapter.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Book Chapters</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Contributions to academic books and comprehensive reference materials
        </p>
      </div>

      {/* Chapters List */}
      <div className="space-y-6">
        {chapters.map((chapter, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <Badge variant="outline">{chapter.year}</Badge>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{chapter.title}</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-gray-700">Authors:</span> {chapter.authors}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Book:</span> {chapter.book}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Publisher:</span> {chapter.publisher}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-gray-700">Pages:</span> {chapter.pages}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">ISBN:</span> {chapter.isbn}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">{chapter.abstract}</p>

              <div className="flex gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleViewChapter(chapter)}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Chapter
                </Button>
                <Button variant="outline" onClick={() => handlePublisherLink(chapter)}>
                  Publisher Link
                </Button>
                <Button variant="outline" onClick={() => handleDownloadChapter(chapter)}>
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
