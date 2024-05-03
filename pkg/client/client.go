package client

import (
	"context"
	"github.com/gptscript-ai/knowledge/pkg/datastore"
	"github.com/gptscript-ai/knowledge/pkg/index"
	"github.com/gptscript-ai/knowledge/pkg/types"
	"github.com/gptscript-ai/knowledge/pkg/vectorstore"
)

type IngestPathsOpts struct {
	IgnoreExtensions []string
	Concurrency      int
	Recursive        bool
}

type Client interface {
	CreateDataset(ctx context.Context, datasetID string) (types.Dataset, error)
	DeleteDataset(ctx context.Context, datasetID string) error
	GetDataset(ctx context.Context, datasetID string) (*index.Dataset, error)
	ListDatasets(ctx context.Context) ([]types.Dataset, error)
	Ingest(ctx context.Context, datasetID string, data []byte, opts datastore.IngestOpts) ([]string, error)
	IngestPaths(ctx context.Context, datasetID string, opts *IngestPathsOpts, paths ...string) (int, error) // returns number of files ingested
	DeleteDocuments(ctx context.Context, datasetID string, documentIDs ...string) error
	Retrieve(ctx context.Context, datasetID string, query string) ([]vectorstore.Document, error)
}
