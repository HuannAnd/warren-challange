interface StatusOption {
  label: string
  value: "processing" | "created" | "processed" | null

}

const options: StatusOption[] = [
  { label: 'status', value: null },
  { label: 'created', value: 'created' },
  { label: 'processing', value: 'processing' },
  { label: 'processed', value: 'processed' },
]

export { options, StatusOption }