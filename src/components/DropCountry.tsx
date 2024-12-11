
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DropCountry() {
  return (
    <div className="border-none placeholder-white">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="How did you hear about me?*" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>How did you hear about me?*</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
