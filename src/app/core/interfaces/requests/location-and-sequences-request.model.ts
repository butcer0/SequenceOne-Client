export interface LocationAndSequencesRequest{
  GeneIds: number[],
  Motifs: number[],
  From: number,
  To: number,
  P: number,
  Offset: number,
  MotifLength: number
}
