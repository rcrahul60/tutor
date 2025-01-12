import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoForm = ({ isOpen, onClose }: DemoFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[672px] p-0">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe596w5T9MsHP81-yQLBDYqhKPRCwVEkS3P5MkqqkrwaRxm3g/viewform?embedded=true"
          width="100%"
          height="585"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded-lg"
        >
          Loading…
        </iframe>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;