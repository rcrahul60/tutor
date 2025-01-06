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
          src="https://docs.google.com/forms/d/e/1FAIpQLSc23H1sd-Y7rhHk-DXYC8aY51E0kQIcMpL80nHVe9noOwTbRg/viewform?embedded=true" 
          width="100%" 
          height="646" 
          style={{ border: 'none' }}
          title="Demo Class Registration Form"
        >
          Loading…
        </iframe>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;